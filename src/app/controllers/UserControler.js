import UsersService from '../../domain/services/UsersService';
import UsersTable from '../components/UsersTable';

export default class UserController {
  static add(event) {
    event.preventDefault();
    const $form = event.target;


    if ($form.validator.isInvalid()) return;

    $form.dispatchEvent(new Event('btnsubmitloading'));

    const formElementsDTO = {
      fullName: $form.querySelector('[data-element="inputNome"]').value,
      cpf: $form.querySelector('[data-element="inputCPF"]').value,
      phone: $form.querySelector('[data-element="inputTelefone"]').value,
      email: $form.querySelector('[data-element="inputEmail"]').value,
    };

    UsersService
      .addNew(formElementsDTO)
      .then(() => {
        $form.dispatchEvent(new Event('btnsubmitloaded'));
        window.location.href = '/';
      });
  }

  static showAll() {
    const usersTable = new UsersTable(window.document.querySelector('[data-template="UsersTable"]'), UserController);

    UsersService
      .getAllWithInitialData()
      .then((users) => {
        usersTable.setState({
          users,
        });
      });
  }

  static remove(user) {
    const usersTable = new UsersTable(window.document.querySelector('[data-template="UsersTable"]'), UserController);

    const removableUserDTO = {
      fullName: user.nome,
      cpf: user.cpf,
      phone: user.telefone,
      email: user.email,
    };

    UsersService
      .deleteUser(removableUserDTO)
      .then(UsersService.getAll)
      .then((users) => {
        usersTable.setState({
          users,
        });
      });
  }
}
