import ValidationContract from './FluentValidator'

export class FormValidator {
  _formFieldElements = []

  constructor($formElement, formFieldNames) {
    this._validationContract = new ValidationContract()

    this._$formElement = $formElement
    this.setupFormElement()

    this._formFieldNames = formFieldNames
    this.setupAllFormFieldElements()
  }

  isValid = () => {
    return !this.isInvalid()
  }

  isInvalid = () => {
    this.validateAllFormFieldElements()
    return this._validationContract.hasErrors()
  }

  setupAllFormFieldElements = () => {
    for (const fieldName in this._formFieldNames) {
      const $formFieldElement = this._$formElement.querySelector(`[name="${fieldName}"]`)
      const formFieldValidator = new FormFieldValidator({
        formFieldElement: $formFieldElement,
        formFieldName: fieldName,
        validationContract: this._validationContract,
        fieldValidation: this._formFieldNames[fieldName]
      })
      this._formFieldElements.push(formFieldValidator)
    }
  }

  setupFormElement = () => {
    this._$formElement.validator = {
      isValid: this.isValid,
      isInvalid: this.isInvalid,
      clear: this.clear
    }
    this._$formElement.addEventListener('change', this.validateFormFieldElement)
    this._$formElement.addEventListener('input', this.validateFormFieldElement)
    this._$formElement.addEventListener('reset', this.clear)
  }

  validateFormFieldElement = ({ target: formFieldElement }) => {
    formFieldElement.validator.validate()
  }

  validateAllFormFieldElements = () => {
    this._formFieldElements.forEach((formFieldElement) => {
      formFieldElement.validate()
    })
  }

  clear = () => {
    this._validationContract = new ValidationContract()
  }

}

class FormFieldValidator {
  initialized = false
  constructor({ formFieldElement, formFieldName, validationContract, fieldValidation }) {
    this._formFieldElement = formFieldElement
    this._formFieldName = formFieldName
    this._validationContract = validationContract
    this._fieldValidation = fieldValidation

    this.init()
  }

  init() {
    this.setupFormElement()
    this.validate()
    this.initialized = true
  }

  validate = () => {
    this.validation();
    this.updateCSSClassInvalidStatus();
    this.updateCSSClassTypedStatus();
    this.updateErrors();
  }

  validation = () => {
    this._fieldValidation(this._formFieldElement.value, this._validationContract);
  }

  updateCSSClassInvalidStatus() {
    if (this.isInvalid() && this.initialized) {
      this._formFieldElement.classList.add('-invalid');
    } else {
      this._formFieldElement.classList.remove('-invalid');
    }
  }

  updateCSSClassTypedStatus() {
    const value = this._formFieldElement.value;
    if (value) {
      this._formFieldElement.classList.add('-typed');
    } else {
      this._formFieldElement.classList.remove('-typed');
    }
  }

  updateErrors = () => {
    if (this.initialized) {
      const errors = Array.from(this._validationContract.getErrorsByParam(this._formFieldName).values()) || [];
      const firstError = errors[0] || {};
      this._formElementErrorElement.innerHTML = `${firstError.message}`;
    }
  }

  isValid = () => {
    return this._validationContract.isValidParam(this._formFieldName);
  }

  isInvalid = () => {
    return !this.isValid();
  }

  setupFormElement = () => {
    this._formFieldElement.validator = {
      validate: this.validate
    };
    this.setupFormElementErrorElement();
  }

  setupFormElementErrorElement = () => {
    this._formFieldElement.insertAdjacentHTML('afterend', `<span class="errors"></span>`);
    this._formElementErrorElement = this._formFieldElement.parentNode.querySelector('.errors');
  }
}
