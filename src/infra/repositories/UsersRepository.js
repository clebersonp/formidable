import deepEqual from '../deepEqual';

export default class UsersRepository {
  key = 'users'

  getItemFromLocalStorage = () => JSON.parse(localStorage.getItem(this.key)) || []

  setItemInLocalStorage = item => localStorage.setItem(this.key, JSON.stringify(item))

  getAll = () => this.getItemFromLocalStorage()

  insert = (user) => {
    const listOfUsers = this.getAll();
    let createdUser;

    if (user.getFullName) {
      createdUser = {
        name: user.getFullName(),
        cpf: user.getCPF(),
        phone: user.getPhone(),
        email: user.getEmail(),
      };
      listOfUsers.push(createdUser);
    }

    this.setItemInLocalStorage(listOfUsers);
    return createdUser;
  }

  remove = (removableUser) => {
    const removableUserDbObj = {
      name: removableUser.getFullName(),
      cpf: removableUser.getCPF(),
      phone: removableUser.getPhone(),
      email: removableUser.getEmail(),
    };
    const listOfUsers = this.getAll();
    const updatedListOfUsers = listOfUsers
      .filter(currentUser => !deepEqual(currentUser, removableUserDbObj));

    this.setItemInLocalStorage(updatedListOfUsers);
  }
}
