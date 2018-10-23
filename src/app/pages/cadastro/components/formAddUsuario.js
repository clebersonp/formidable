import { FormValidator } from '../../../../infra/FormValidator'
import { newUserValidationSchema } from '../../../validations/newUserValidationSchema';

const $formElement = document.querySelector('[data-element="formAddUsuario"]')

function startBtnSubmitLoading() {
    $formElement.querySelector('[data-element="btnSubmit"]').classList.add('-loading')
    $formElement.querySelector('[data-element="btnSubmit"]').setAttribute('disabled', 'true')
}

function stopBtnSubmitLoading() {
    $formElement.querySelector('[data-element="btnSubmit"]').classList.remove('-loading')
    $formElement.querySelector('[data-element="btnSubmit"]').removeAttribute('disabled')
    $formElement.reset()
}

$formElement.addEventListener('btnsubmitloading', startBtnSubmitLoading)
$formElement.addEventListener('btnsubmitloaded', stopBtnSubmitLoading)

export default {
  element: $formElement,
  init: () => {
    new FormValidator( $formElement, newUserValidationSchema )
  }
}

