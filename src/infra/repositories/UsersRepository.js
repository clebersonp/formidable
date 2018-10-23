import deepEqual from '../deepEqual';

export default class UsersRepository {
  key = 'users'

  getItemFromLocalStorage = () => JSON.parse(localStorage.getItem(this.key)) || []

  setItemInLocalStorage = item => localStorage.setItem(this.key, JSON.stringify(item))

  getAll = () => this.getItemFromLocalStorage()

  insert = (user) => {
    const listOfUsers = this.getAll();
    if (user.getFullName) {
      listOfUsers.push({
        name: user.getFullName(),
        cpf: user.getCPF(),
        phone: user.getPhone(),
        email: user.getEmail(),
      });
    }

    return new Promise((resolve, reject) => {
      try {
        this.setItemInLocalStorage(listOfUsers);
        resolve({ message: 'User registered with success' });
      } catch (err) {
        reject(err);
      }
    });
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
