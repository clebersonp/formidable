import UsersService from '../../domain/services/UsersService';

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

  // showAll(event) {
  // import { UsersTable } from '../components/UsersTable'
  //   // const usersTable = new UsersTable(document.querySelector('[data-template="UsersTable"]'))
  //   // const users = new UsersRepository().getAll()
  //   // usersTable.setState({
  //   //   users
  //   // })
  // }
}
