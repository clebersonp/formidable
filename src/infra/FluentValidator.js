export class ValidationContract {
  _errors = new Map()

  validate(param, value) {
    this.setParam(param)
    return new Validations({ contract: this, param, value })
  }

  get errors() {
    return this._errors
  }

  hasErrors = () => {
    let contractIsInvalid = false
    this._errors.forEach((param) => {
      if (param.size === 1) {
        contractIsInvalid = true
      }
    })
    return contractIsInvalid
  }

  setParam(param) {
    if (!this._errors.get(param)) {
      this._errors.set(param, new Map())
    }
  }

  setError = (param, type, message) => {
    const errorObj = {
      param,
      type,
      message
    }
    this.getErrorsByParam(param).set(type, errorObj)
  }

  removeError = (param, type) => {
    if (this.getErrorsByParam(param)) {
      this.getErrorsByParam(param).delete(type)
    }
  }


  getErrorsByParam(param) {

    return this._errors.get(param)
  }

  isValidParam(param) {
    const paramErrors = this._errors.get(param)
    if (paramErrors) return paramErrors.size === 0

    return false
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

  isCPF = (message = 'CPF must to be valid') => {
    const condition = !((value) => {
      let sum = 0;
      let cpfValue = value
      if (cpfValue == "00000000000") return false;

      for (let i = 1; i <= 9; i++) sum = sum + parseInt(cpfValue.substring(i - 1, i)) * (11 - i);
      let mod = (sum * 10) % 11;

      if ((mod == 10) || (mod == 11)) mod = 0;
      if (mod != parseInt(cpfValue.substring(9, 10))) return false;

      sum = 0;
      for (let i = 1; i <= 10; i++) sum = sum + parseInt(cpfValue.substring(i - 1, i)) * (12 - i);
      mod = (sum * 10) % 11;

      if ((mod == 10) || (mod == 11)) mod = 0;
      if (mod != parseInt(cpfValue.substring(10, 11))) return false;
      return true;
    })(this._value)


    this.applyValidation(condition, 'isRequired', message)

    return this
  }


  hasMinLength = (minLength, message = `Minimal lenght is ${minLength}`) => {
    const condition = this._value.length < minLength

    this.applyValidation(condition, 'isRequired', message)

    return this

  }

}
