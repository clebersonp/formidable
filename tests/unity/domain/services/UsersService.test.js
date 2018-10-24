import { expect } from '../../setup'
import sinon from 'sinon';

import User from '../../../../src/domain/entities/User'
import UsersService from '../../../../src/domain/services/UsersService'
import { EXTERNAL_SERVICE_URL } from '../../../../src/domain/services/configs'
import UsersRepository from '../../../../src/infra/repositories/UsersRepository'


const userDTO = {
  fullName: 'Foo bar',
  cpf: '04080757247',
  phone: '0012345678',
  email: 'foo@test.com',
}

let fetchStub;
let usersRepositoryStubs = {}
let usersRepository = new UsersRepository()
let usersService = new UsersService({ usersRepository })

describe('/domain/services/UsersService', () => {
  beforeEach(() => {
    usersRepositoryStubs.insert = sinon.stub(UsersRepository.prototype, 'insert').callsFake(() => {})
    usersRepositoryStubs.getAll = sinon.stub(UsersRepository.prototype, 'getAll').callsFake(() => [])
    usersRepositoryStubs.remove = sinon.stub(UsersRepository.prototype, 'remove')

    fetchStub = sinon.stub(global, 'fetch').resolves({ ok: true, json: () => ([userDTO]) })

    usersRepository = new UsersRepository()
    usersService = new UsersService({ usersRepository })
  })

  afterEach(() => {
    fetchStub.restore()
    Object.values(usersRepositoryStubs).forEach((stub) => stub.restore())
  })

  describe('addNew()', () => {
    it('should call usersRepository.insert() one time', () => {
      usersService.addNew(userDTO)
      expect(usersRepositoryStubs.insert).to.have.been.calledOnce;
    });

    it('should call usersRepository.insert() with passed userDTO', () => {
      usersService.addNew(userDTO)
      expect(usersRepositoryStubs.insert).to.have.been.called;

      const userPassedToStub = usersRepositoryStubs.insert.firstCall.args[0]
      expect(userPassedToStub).to.be.instanceOf(User)
    })
  })

  describe('getAll()', () => {
    it('should call usersRepository.getAll() one time', () => {
      usersService.getAll(userDTO)
      expect(usersRepositoryStubs.getAll).to.have.been.calledOnce;
    });

    it('should call usersRepository.getAll() and return an array', (done) => {
      usersService.getAll(userDTO).then((users) => {
        expect(users).to.be.an('array')
        done()
      })
    });
  })

  describe('deleteUser()', () => {
    it('should call usersRepository.remove() one time', () => {
      usersService.deleteUser(userDTO)
      expect(usersRepositoryStubs.remove).to.have.been.calledOnce;
    });

    it('should call usersRepository.remove() with passed userDTO', () => {
      usersService.deleteUser(userDTO)
      expect(usersRepositoryStubs.remove).to.have.been.calledOnce;

      const userPassedToStub = usersRepositoryStubs.remove.firstCall.args[0]
      expect(userPassedToStub).to.be.instanceOf(User)
    })
  })

  describe('insertExternalUsers', () => {
    it('should call fetch function', () => {
      usersService.insertExternalUsers()
      expect(fetchStub).to.have.been.calledOnce;
    })

    it(`should be called with ${EXTERNAL_SERVICE_URL}`, () => {
      usersService.insertExternalUsers()
      expect(fetchStub).to.have.been.calledWith(EXTERNAL_SERVICE_URL);
    })

  })

  describe('getAllWithInitialData()', () => {
    it('should call usersRepository.getAll() two times if has one or more users registered on usersRepository.getAll', () => {
      usersRepositoryStubs.getAll.restore()
      usersRepositoryStubs.getAll = sinon.stub(UsersRepository.prototype, 'getAll').callsFake(() => [userDTO])
      usersRepository = new UsersRepository()
      usersService = new UsersService({ usersRepository })

      usersService.getAllWithInitialData()

      expect(usersRepositoryStubs.getAll).to.have.been.calledTwice;
    });

    it('should call fetch() once if has no users registeres on usersRepository.getAll', () => {
      usersRepositoryStubs.getAll.restore()
      usersRepositoryStubs.getAll = sinon.stub(UsersRepository.prototype, 'getAll').callsFake(() => [])
      usersRepository = new UsersRepository()
      usersService = new UsersService({ usersRepository })

      usersService.getAllWithInitialData()
      expect(usersRepositoryStubs.getAll).to.have.been.calledOnce;
      expect(fetchStub).to.have.been.calledOnce;
    })
  })

})
