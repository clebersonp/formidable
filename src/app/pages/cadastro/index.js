import { UserController } from '../../controllers/UserControler'
import { FormValidator } from '../../../infra/FormValidator'
import { newUserValidationSchema } from '../../validations/newUserValidationSchema';

window.pageCadastro = {
  userController: new UserController(),
  formAddUsuario: new FormValidator(
    document.querySelector('[data-element="formAddUsuario"]'),
    newUserValidationSchema
  )
}



