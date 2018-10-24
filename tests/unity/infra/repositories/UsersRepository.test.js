import { expect } from '../../setup'
import User from '../../../../src/domain/entities/User';
import UsersRepository from '../../../../src/infra/repositories/UsersRepository';

const userObj = {
  cpf: '04080757247',
  email: 'teste@test.com',
  fullName: 'Foo',
  phone: '0012345678'
}

let user = new User(userObj)
let usersRepository = new UsersRepository()

describe('infra/repositories/UsersRepository', () => {

  afterEach(() => {
    localStorage.clear()
  })

  describe('insert()', () => {
    it('should insert an user', () => {
      const createdUser = usersRepository.insert(user)
      const expectedUser = {
        name: user.getFullName(),
        cpf: user.getCPF(),
        phone: user.getPhone(),
        email: user.getEmail()
      }
      expect(createdUser).to.be.deep.equals(expectedUser)
    })
  })
  describe('getAll()', () => {
    it('should return a list of 3 users', () => {
      usersRepository.insert(user)
      usersRepository.insert(user)
      usersRepository.insert(user)
      expect(usersRepository.getAll().length).to.be.equal(3)
    })
  })
  describe('remove()', () => {
    it('should remove a user', () => {
      usersRepository.insert(user)
      usersRepository.remove(user)
      expect(usersRepository.getAll().length).to.be.equal(0)
    })
  })
})
