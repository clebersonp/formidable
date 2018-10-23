import UserController from '../../controllers/UserControler';
import formAddUsuario from './elements/formAddUsuario';

formAddUsuario.init();

window.pageCadastro = {
  userController: new UserController(),
};
