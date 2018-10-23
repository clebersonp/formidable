import { UserController } from '../../controllers/UserControler'
import formAddUsuario from './components/formAddUsuario'

formAddUsuario.init()

window.pageCadastro = {
  userController: new UserController()
}



