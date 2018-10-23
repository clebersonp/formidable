// import { User } from "../entities/User";

export default class UsersRepository {
  key = 'users'

  getItemFromLocalStorage = () => JSON.parse(localStorage.getItem(this.key)) || []

  setItemInLocalStorage = item => localStorage.setItem(this.key, JSON.stringify(item))

  getAll = () => {
    // return this.getItemFromLocalStorage().map((user) => {
    //   return new User({
    //     fullName: user._fullName,
    //     cpf: user._cpf,
    //     phone: user._phone,
    //     email: user._email
    //   })
    // })
  }

  add = (user) => {
    const listOfUsers = this.getAll();
    listOfUsers.push(user);
    this.setItemInLocalStorage(listOfUsers);
  }
}
