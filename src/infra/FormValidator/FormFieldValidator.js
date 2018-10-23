export default class FormFieldValidator {
  initialized = false

  constructor({
    formFieldElement,
    formFieldName,
    validationContract,
    fieldValidation,
  }) {
    this.formFieldElement = formFieldElement;
    this.formFieldName = formFieldName;
    this.validationContract = validationContract;
    this.fieldValidation = fieldValidation;

    this.init();
  }

  init() {
    this.setupFormElement();
    this.validate();
    this.initialized = true;
  }

  validate = () => {
    this.validation();
    this.updateCSSClassInvalidStatus();
    this.updateCSSClassTypedStatus();
    this.updateErrors();
  }

  validation = () => {
    this.fieldValidation(this.formFieldElement.value, this.validationContract);
  }

  updateCSSClassInvalidStatus() {
    if (this.isInvalid() && this.initialized) {
      this.formFieldElement.classList.add('-invalid');
    } else {
      this.formFieldElement.classList.remove('-invalid');
    }
  }

  updateCSSClassTypedStatus() {
    const { value } = this.formFieldElement;
    if (value) {
      this.formFieldElement.classList.add('-typed');
    } else {
      this.formFieldElement.classList.remove('-typed');
    }
  }

  updateErrors = () => {
    if (this.initialized) {
      const errorsOfThisParam = this.validationContract.getErrorsByParam(this.formFieldName);
      const errors = Array.from(errorsOfThisParam.values()) || [];
      const firstError = errors[0] || {};
      this.formElementErrorElement.innerHTML = `${firstError.message}`;
    }
  }

  isValid = () => this.validationContract.isValidParam(this.formFieldName)

  isInvalid = () => !this.isValid()

  setupFormElement = () => {
    this.formFieldElement.validator = {
      validate: this.validate,
    };
    this.setupFormElementErrorElement();
  }

  setupFormElementErrorElement = () => {
    this.formFieldElement.insertAdjacentHTML('afterend', '<span class="errors"></span>');
    this.formElementErrorElement = this.formFieldElement.parentNode.querySelector('.errors');
  }
}
