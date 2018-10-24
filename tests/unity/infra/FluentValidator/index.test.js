import { expect } from '../../setup'
import ValidationContract from '../../../../src/infra/FluentValidator'

let contract = new ValidationContract()
describe('/infra/FluentValidator/ValidationContract', () => {
  beforeEach(() => {
    contract = new ValidationContract()
  })

  describe('smoke test', () => {
    it('validate() should be a method of contract', () => {
      expect(contract.validate).to.be.an('function')
    })
    it('getErrors() should be a method of contract', () => {
      expect(contract.getErrors).to.be.an('function')
    })
    it('hasErrors() should be a method of contract', () => {
      expect(contract.hasErrors).to.be.an('function')
    })
    it('setParam() should be a method of contract', () => {
      expect(contract.setParam).to.be.an('function')
    })
    it('setError() should be a method of contract', () => {
      expect(contract.setError).to.be.an('function')
    })
    it('removeError() should be a method of contract', () => {
      expect(contract.removeError).to.be.an('function')
    })
    it('getErrorsByParam() should be a method of contract', () => {
      expect(contract.getErrorsByParam).to.be.an('function')
    })
    it('isValidParam() should be a method of contract', () => {
      expect(contract.isValidParam).to.be.an('function')
    })
  })

  it('should return "one" error if param name is invalid', () => {
    contract.validate('name', '').isRequired()
    expect(contract.errors.size).to.be.equal(1)
  })

  it('should return "two" errors if surname and name are invalid', () => {
    contract.validate('name', '').isRequired()
    contract.validate('surname', '').isRequired()
    expect(contract.errors.size).to.be.equal(2)
  })

  it('should have no errors after value is correctly filled', () => {
    contract.validate('name', '').isRequired()
    contract.validate('name', 'Mario').isRequired()
    expect(contract.getErrorsByParam('name').size).to.be.equal(0)
  })

  it('should be required and a valid email', () => {
    const param = 'email'

    contract.validate(param, '').isRequired().isEmail()

    expect(contract.getErrorsByParam(param)).to.have.all.keys('isEmail', 'isRequired');
  })

  it('should return no errors', () => {
    contract.validate('name', '').isRequired()
    contract.validate('surname', '').isRequired()
    contract.validate('name', 'Mario').isRequired()
    contract.validate('surname', 'Souto').isRequired()

    expect(contract.hasErrors()).to.be.equal(false)
  })

  it('should return a map of errors', () => {
    contract.validate('name', '').isRequired()
    contract.validate('nickname', '').isRequired()

    expect(contract.getErrors()).to.be.instanceof(Map)
    expect(contract.getErrors().size).to.be.equal(2)
  })


  it('should check if specific param is valid', () => {
    contract.validate('name', 'Foo').isRequired()
    expect(contract.isValidParam('name')).to.be.equal(true)
  })
  it('should return false if pass a invalid param to isValidParam()', () => {
    contract.validate('name', 'Foo').isRequired()
    expect(contract.isValidParam('names')).to.be.equal(false)
    expect(contract.isValidParam()).to.be.equal(false)
  })
})
