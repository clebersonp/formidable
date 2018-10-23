export default class Validations {
  constructor({ contract, param, value }) {
    this.param = param;
    this.contract = contract;
    this.value = value;
  }

  applyValidation = (condition, validationName, message) => {
    if (condition) {
      this.contract.setError(this.param, validationName, message);
    } else {
      this.contract.removeError(this.param, validationName, message);
    }
  }

  isRequired = (message = 'This field is required') => {
    const condition = !this.value || this.value.length <= 0;

    this.applyValidation(condition, 'isRequired', message);

    return this;
  }

  isEmail = (message = 'Email must to be valid') => {
    const regexEmailValid = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    const condition = !regexEmailValid.test(this.value);
    this.applyValidation(condition, 'isEmail', message);

    return this;
  }

  isCPF = (message = 'CPF must to be valid') => {
    const condition = !((value) => {
      let sum = 0;
      const cpfValue = value;
      if (cpfValue === '00000000000') return false;

      for (let i = 1; i <= 9; i += 1) {
        sum += parseInt(cpfValue.substring(i - 1, i), 10) * (11 - i);
      }
      let mod = (sum * 10) % 11;

      if ((mod === 10) || (mod === 11)) mod = 0;
      if (mod !== parseInt(cpfValue.substring(9, 10), 10)) return false;

      sum = 0;
      for (let i = 1; i <= 10; i += 1) {
        sum += parseInt(cpfValue.substring(i - 1, i), 10) * (12 - i);
      }
      mod = (sum * 10) % 11;

      if ((mod === 10) || (mod === 11)) mod = 0;
      if (mod !== parseInt(cpfValue.substring(10, 11), 10)) return false;
      return true;
    })(this.value);


    this.applyValidation(condition, 'isCPF', message);

    return this;
  }

  hasMinLength = (minLength, message = `Minimal lenght is ${minLength}`) => {
    const condition = this.value.length < minLength;

    this.applyValidation(condition, 'hasMinLength', message);

    return this;
  }
}
