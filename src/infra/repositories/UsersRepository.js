// import { User } from "../entities/User";

export default class UsersRepository {
  key = 'users'

  getItemFromLocalStorage = () => JSON.parse(localStorage.getItem(this.key)) || []

  setItemInLocalStorage = item => localStorage.setItem(this.key, JSON.stringify(item))

  getAll = () => this.getItemFromLocalStorage()

  insert = (user) => {
    const listOfUsers = this.getAll();

    listOfUsers.push({
      name: user.getFullName(),
      cpf: user.getCPF(),
      phone: user.getPhone(),
      email: user.getEmail(),
    });

    return new Promise((resolve, reject) => {
      try {
        this.setItemInLocalStorage(listOfUsers);
        resolve({ message: 'User registered with success' });
      } catch (err) {
        reject(err);
      }
    });
  }
}
