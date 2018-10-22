import { UserController } from '../../controllers/UserControler'
import { FormValidator } from '../../../infra/FormValidator'

window.pageCadastro = {
  userController: new UserController(),
  formAddUsuario: new FormValidator(
    document.querySelector('[data-element="formAddUsuario"]'),
    {
      'nome': (value, contract) => contract.validate('nome', value).isRequired(),
      // 'cpf': (value, contract) => contract.validate('cpf', value).isRequired().isCPF(),
      // 'telefone': (value, contract) => contract.validate('telefone', value).isRequired().isPhoneOrCellPhone(),
      'email': (value, contract) => contract.validate('email', value).isRequired().isEmail()
    }
  )
}



