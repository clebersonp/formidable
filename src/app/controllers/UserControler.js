import UsersService from '../../domain/services/UsersService';
import UsersRepository from '../../infra/repositories/UsersRepository';
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

    const usersRepository = new UsersRepository();
    const usersService = new UsersService({ usersRepository });

    setTimeout(() => {
      usersService
        .addNew(formElementsDTO)
        .then(() => {
          $form.dispatchEvent(new Event('btnsubmitloaded'));
          window.location.href = '/';
        })
        .catch((err) => {
          /* eslint no-alert: "error" */
          if (err.message === 'User already exists') $form.updateFormError('Usuário já existe :(');
          $form.dispatchEvent(new Event('stoploading'));
        });
    }, 2000);
  }

  static showAll() {
    const usersTable = new UsersTable(window.document.querySelector('[data-template="UsersTable"]'), UserController);

    const usersRepository = new UsersRepository();
    const usersService = new UsersService({ usersRepository });

    usersService
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

    const usersRepository = new UsersRepository();
    const usersService = new UsersService({ usersRepository });

    usersService
      .deleteUser(removableUserDTO)
      .then(usersService.getAll)
      .then((users) => {
        usersTable.setState({
          users,
        });
      });
  }
}
