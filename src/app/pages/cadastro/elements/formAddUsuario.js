import FormValidator from '../../../../infra/FormValidator';
import newUserValidationSchema from '../../../validations/newUserValidationSchema';

const $formElement = window.document.querySelector('[data-element="formAddUsuario"]');

function startBtnSubmitLoading() {
  $formElement.querySelector('[data-element="btnSubmit"]').classList.add('-loading');
  $formElement.querySelector('[data-element="btnSubmit"]').setAttribute('disabled', 'true');
}

function stopBtnSubmitLoading() {
  $formElement.querySelector('[data-element="btnSubmit"]').classList.remove('-loading');
  $formElement.querySelector('[data-element="btnSubmit"]').removeAttribute('disabled');
  $formElement.reset();
}


export default {
  element: $formElement,
  formValidator: new FormValidator($formElement, newUserValidationSchema),
  init: () => {
    $formElement.addEventListener('btnsubmitloading', startBtnSubmitLoading);
    $formElement.addEventListener('btnsubmitloaded', stopBtnSubmitLoading);
  },
};
