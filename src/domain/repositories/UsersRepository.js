import { User } from "../entities/User";

export class UsersRepository {
  key = 'users'

  _getItem() {
    return JSON.parse(localStorage.getItem(this.key)) || []
  }

  _setItem(item) {
    return localStorage.setItem(this.key, JSON.stringify(item))
  }

  getAll() {
    return this._getItem().map((user) => {
      return new User({
        fullName: user._fullName,
        cpf: user._cpf,
        phone: user._phone,
        email: user._email
      })
    })
  }

  add(user) {
    const listOfUsers = this.getAll()
    listOfUsers.push(user)
    this._setItem(listOfUsers)
  }
}
