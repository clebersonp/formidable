export class ValidationContract {
  _errors = new Map()

  validate(param, value) {
    return new Validations({ contract: this, param, value })
  }

  hasErrors = () => {
    let contractIsInvalid = false
    this._errors.forEach((param) => {
      if(param.size === 1) {
        contractIsInvalid = true
      }
    })
    return contractIsInvalid
  }

  setError = (param, type, message) => {
    const currentParamErrors = this.getErrorsByParam(param)
    const errorObj = {
      param,
      type,
      message
    }
    if(currentParamErrors) {
      currentParamErrors.set(type, errorObj)
    } else {
      this._errors.set(param, new Map())
      this.getErrorsByParam(param).set(type, errorObj)
    }
  }

  removeError = (param, type) => {
    if(this.getErrorsByParam(param)) {
      this.getErrorsByParam(param).delete(type)
    }
  }

  get errors() {
    return this._errors
  }

  getErrorsByParam(param) {
    return this._errors.get(param)
  }

  isValidParam(param) {
    return this._errors.get(param).size === 0
  }
}

class Validations {
  constructor({ contract, param, value }) {
    this._param = param
    this._contract = contract
    this._value = value
  }

  applyValidation = (condition, validationName, message) => {
    if (condition) {
      this._contract.setError(this._param, validationName, message)
    } else {
      this._contract.removeError(this._param, validationName, message)
    }
  }

  isRequired = (message = 'This field is required') => {
    const condition = !this._value || this._value.length <= 0

    this.applyValidation(condition, 'isRequired', message)

    return this
  }

  isEmail = (message = 'Email must to be valid') => {
    var regexEmailValid = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    const condition = !regexEmailValid.test(this._value)
    this.applyValidation(condition, 'isEmail', message)

    return this
  }

}
