import ValidationContract from '../FluentValidator';
import FormFieldValidator from './FormFieldValidator';

export default class FormValidator {
  formFieldElements = [];

  constructor($formElement, formFieldNames) {
    this.validationContract = new ValidationContract();

    this.formElement = $formElement;
    this.setupFormElement();

    this.formFieldNames = formFieldNames;
    this.setupAllFormFieldElements();
  }

  isValid = () => !this.isInvalid();

  isInvalid = () => {
    this.validateAllFormFieldElements();
    return this.validationContract.hasErrors();
  }

  setupAllFormFieldElements = () => {
    const arrayOfFormFieldNames = Object.keys(this.formFieldNames);

    arrayOfFormFieldNames.forEach((fieldName) => {
      const $formFieldElement = this.formElement.querySelector(`[name="${fieldName}"]`);
      const formFieldValidator = new FormFieldValidator({
        formFieldElement: $formFieldElement,
        formFieldName: fieldName,
        validationContract: this.validationContract,
        fieldValidation: this.formFieldNames[fieldName],
      });
      this.formFieldElements.push(formFieldValidator);
    });
  }

  setupFormElement = () => {
    this.formElement.validator = {
      isValid: this.isValid,
      isInvalid: this.isInvalid,
      clear: this.clear,
    };

    this.formElement.addEventListener('change', this.validateFormFieldElement);
    this.formElement.addEventListener('input', this.validateFormFieldElement);
    this.formElement.addEventListener('reset', this.clear);
  }

  validateFormFieldElement = ({ target: formFieldElement }) => {
    formFieldElement.validator.validate();
  }

  validateAllFormFieldElements = () => {
    this.formFieldElements.forEach((formFieldElement) => {
      formFieldElement.validate();
    });
  }

  clear = () => {
    this.validationContract = new ValidationContract();
  }
}
