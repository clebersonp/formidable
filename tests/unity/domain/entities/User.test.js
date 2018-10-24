import { expect } from '../../setup'

import User from '../../../../src/domain/entities/User';
import CPF from '../../../../src/domain/valueObjects/CPF';
import Phone from '../../../../src/domain/valueObjects/Phone';

const userObj = {
  cpf: '04080757247',
  email: 'teste@test.com',
  fullName: 'Foo',
  phone: '0012345678'
}

describe('domain/valueObjects/CPF', () => {
  it('should create an user instance', () => {
    const user = new User(userObj)
    expect(user).to.be.an.instanceOf(User)
  })

  it('should return a User fullName', () => {
    const user = new User(userObj)
    expect(user.getFullName()).to.be.equal(userObj.fullName)
  })

  it('should return a User email', () => {
    const user = new User(userObj)
    expect(user.getEmail()).to.be.equal(userObj.email)
  })

  it('should return a User CPF', () => {
    const user = new User(userObj)
    expect(user.getCPF()).to.be.equal(userObj.cpf)
    expect(user.getCPFFormated()).to.be.equal(new CPF({ CPFNumbers: userObj.cpf }).getValueFormated())
  })

  it('should return a User Phone', () => {
    const user = new User(userObj)
    expect(user.getPhone()).to.be.equal(userObj.phone)
    expect(user.getPhoneFormated()).to.be.equal(new Phone({ number: userObj.phone }).getNumberFormated())
  })


})
