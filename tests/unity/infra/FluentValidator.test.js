import { expect } from '../setup'
import { ValidationContract } from '../../../src/infra/FluentValidator.js'

let contract = new ValidationContract()
describe('Fluent Validator', () => {
  beforeEach(() => {
    contract = new ValidationContract()
  })

  it('should return "one" error if param name is invalid', () => {
    contract
      .validate('name', '')
      .isRequired()
    expect(contract.errors.size).to.be.equal(1)
  })

  it('should return "two" errors if surname and name are invalid', () => {
    contract
      .validate('name', '')
      .isRequired()

    contract
      .validate('surname', '')
      .isRequired()

    expect(contract.errors.size).to.be.equal(2)
  })

  it('should have no errors after value is correctly filled', () => {
    contract
      .validate('name', '')
      .isRequired()

    contract
      .validate('name', 'Mario')
      .isRequired()

    expect(contract.getErrorsByParam('name').size).to.be.equal(0)
  })

  it('should be required and a valid email', () => {
    const param = 'email'

    contract
      .validate(param, '')
        .isRequired()
        .isEmail()

    expect(contract.getErrorsByParam(param)).to.have.all.keys('isEmail', 'isRequired');
  })

  it('should return no errors', () => {
    contract
      .validate('name', '')
      .isRequired()

    contract
      .validate('surname', '')
      .isRequired()

    contract
      .validate('name', 'Mario')
      .isRequired()

    contract
      .validate('surname', 'Souto')
      .isRequired()

    expect(contract.hasErrors()).to.be.equal(false)
  })
})
