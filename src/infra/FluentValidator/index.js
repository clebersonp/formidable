import Validations from './Validations';

export default class ValidationContract {
  errors = new Map()

  validate(param, value) {
    this.setParam(param);
    return new Validations({ contract: this, param, value });
  }

  getErrors() {
    return this.errors;
  }

  hasErrors = () => {
    const listOfValidationErrors = Array.from(this.errors.values());
    const firstValidationErrorHasErrors = listOfValidationErrors[0].size > 0;

    const isValidContract = listOfValidationErrors.reduce((acc, currentError) => {
      const hasCurrentValidationErrorErrors = currentError.size > 0;
      const previousOrCurrentHasErrors = acc || hasCurrentValidationErrorErrors;

      if (previousOrCurrentHasErrors) return true;

      return acc;
    }, firstValidationErrorHasErrors);

    return isValidContract;
  }

  setParam(param) {
    if (!this.errors.get(param)) {
      this.errors.set(param, new Map());
    }
  }

  setError = (param, type, message) => {
    const errorObj = {
      param,
      type,
      message,
    };
    this.getErrorsByParam(param).set(type, errorObj);
  }

  removeError = (param, type) => {
    if (this.getErrorsByParam(param)) {
      this.getErrorsByParam(param).delete(type);
    }
  }


  getErrorsByParam(param) {
    return this.errors.get(param);
  }

  isValidParam(param) {
    const paramErrors = this.errors.get(param);
    if (paramErrors) return paramErrors.size === 0;

    return false;
  }
}
