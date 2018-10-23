import { User } from "../../domain/entities/User"
import { UsersRepository } from "../../domain/repositories/UsersRepository";
import { UsersTable } from '../components/UsersTable'

export class UserController {
  add(event) {
    event.preventDefault()
    const $form = event.target

    if($form.validator.isInvalid()) return;

    const formElementsDTO = {
      fullName: $form.querySelector('[data-element="inputNome"]').value,
      cpf: $form.querySelector('[data-element="inputCPF"]').value,
      phone: $form.querySelector('[data-element="inputTelefone"]').value,
      email: $form.querySelector('[data-element="inputEmail"]').value
    }

    $form.dispatchEvent(new Event('btnsubmitloading'))
    setTimeout(() => {
      $form.dispatchEvent(new Event('btnsubmitloaded'))
    }, 2000)

    const user = new User(formElementsDTO)

    const usersRepository = new UsersRepository()
    usersRepository.add(user)
  }

  showAll(event) {
    // const usersTable = new UsersTable(document.querySelector('[data-template="UsersTable"]'))
    // const users = new UsersRepository().getAll()
    // usersTable.setState({
    //   users
    // })
  }
}

