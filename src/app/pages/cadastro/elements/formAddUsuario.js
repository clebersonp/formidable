import FormValidator from '../../../../infra/FormValidator';
import newUserValidationSchema from '../../../validations/newUserValidationSchema';

const $formElement = window.document.querySelector('[data-element="formAddUsuario"]');

function startBtnSubmitLoading() {
  $formElement.querySelector('[data-element="btnSubmit"]').classList.add('-loading');
  $formElement.querySelector('[data-element="btnSubmit"]').setAttribute('disabled', 'true');
}

function stopBtnSubmitStopLoading() {
  $formElement.querySelector('[data-element="btnSubmit"]').classList.remove('-loading');
  $formElement.querySelector('[data-element="btnSubmit"]').removeAttribute('disabled');
}

function stopBtnSubmitLoaded() {
  $formElement.updateFormError();
  $formElement.dispatchEvent(new Event('stoploading'));
  $formElement.reset();
}

$formElement.addEventListener('btnsubmitloading', startBtnSubmitLoading);
$formElement.addEventListener('stoploading', stopBtnSubmitStopLoading);

$formElement.addEventListener('btnsubmitloaded', stopBtnSubmitLoaded);

$formElement.updateFormError = (message = '') => {
  $formElement.querySelector('[data-element="formError"]').innerHTML = message;
};

export default {
  element: $formElement,
  formValidator: new FormValidator($formElement, newUserValidationSchema),
};
