import { ValidationContract } from './FluentValidator'

export class FormValidator {
  constructor($formElement, formFieldNames) {
    this._validationContract = new ValidationContract()

    this._$formElement = $formElement
    this.setupFormElement()

    this._formFieldNames = formFieldNames
    this.setupAllFormFieldElements()
  }

  isValid = () => {
    console.log('a')
    return !this.isInvalid()
  }

  isInvalid = () => {
    this.validateAllFormFieldElements()
    return this._validationContract.hasErrors()
  }

  // [REFATORAR]
  setupAllFormFieldElements = () => {
    const formFieldElements = []
    for(const fieldName in this._formFieldNames) {
      const $formFieldElement = this._$formElement.querySelector(`[name="${fieldName}"]`)

      $formFieldElement.insertAdjacentHTML('afterend', `<span class="errors"></span>`)

      const $formFieldErrorsElement = $formFieldElement.nextElementSibling

      $formFieldElement.validate = () => {
        this._formFieldNames[fieldName]($formFieldElement.value, this._validationContract)
        // console.log('Erros deste campo:', this._validationContract.getErrorsByParam(fieldName))
        console.log(this._validationContract.isValidParam(fieldName))
        if(!this._validationContract.isValidParam(fieldName)) {
          $formFieldElement.classList.add('-invalid')
        } else {
          $formFieldElement.classList.remove('-invalid')
        }

        $formFieldErrorsElement.innerHTML = `${
          Array.from(this._validationContract.getErrorsByParam(fieldName).values()).map((error) => error.message)
        }`
      }

      formFieldElements.push($formFieldElement)
    }
    this._formFieldElements = formFieldElements
  }

  setupFormElement = () => {
    this._$formElement.validator = {
      isValid: this.isValid,
      isInvalid: this.isInvalid
    }
    this._$formElement.addEventListener('change', this.validateFormFieldElement)
    this._$formElement.addEventListener('input', this.validateFormFieldElement)
  }

  validateFormFieldElement = ({ target: formFieldElement }) => {
    formFieldElement.validate()
  }

  validateAllFormFieldElements = () => {
    this._formFieldElements.forEach((formFieldElement) => {
      formFieldElement.validate()
    })
  }

}

class FormFieldValidator {
  validate() {

  }

  isValid
}
