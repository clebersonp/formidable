import { expect } from '../../setup'
import Validations from '../../../../src/infra/FluentValidator/Validations';
import ValidationContract from '../../../../src/infra/FluentValidator';


let contract = new ValidationContract()
describe('infra/FluentValidator/Validations', () => {

  beforeEach(() => {
    let contract = new ValidationContract()
  })

  describe('isRequired', () => {
    it('should check if a param is filled', () => {
      contract.validate('name', 'Name test 1').isRequired()
      expect(contract.getErrorsByParam('name').size).to.be.equal(0)
    })
    it('should check if a param is not filled', () => {
      contract.validate('name', '').isRequired()
      expect(contract.getErrorsByParam('name').size).to.be.equal(1)
    })
  })

  describe('isEmail', () => {
    it('should check if an Email is valid', () => {
      contract.validate('email', 'teste@teste.com').isEmail()
      expect(contract.getErrorsByParam('email').size).to.be.equal(0)
    })
    it('should check if a param is invalid', () => {
      contract.validate('email', 'teste@t').isEmail()
      expect(contract.getErrorsByParam('email').size).to.be.equal(1)
    })
  })

  describe('isCPF', () => {
    it('should check if CPF is valid', () => {
      contract.validate('cpf', '78292942750').isCPF()
      expect(contract.getErrorsByParam('cpf').size).to.be.equal(0)
    })
    it('should check if CPF has invalid digit', () => {
      contract.validate('cpf', '78292942758').isCPF()
      expect(contract.getErrorsByParam('cpf').size).to.be.equal(1)
    })
    it('should check if CPF has invalid length', () => {
      contract.validate('cpf', '78292942').isCPF()
      expect(contract.getErrorsByParam('cpf').size).to.be.equal(1)
    })
    it('should check if CPF is 00000000000', () => {
      contract.validate('cpf', '00000000000').isCPF()
      expect(contract.getErrorsByParam('cpf').size).to.be.equal(1)
    })
  })

  describe('hasMinLength', () => {
    it('should check if an param has a min length of 3', () => {
      contract.validate('state', 'Rio').hasMinLength(3)
      expect(contract.getErrorsByParam('state').size).to.be.equal(0)
    })
    it('should check if an param has a min length less than 3', () => {
      contract.validate('state', 'R').hasMinLength(3)
      expect(contract.getErrorsByParam('state').size).to.be.equal(1)
    })
  })

})
