import { Phone } from "../valueObjects/Phone";
import { CPF } from "../valueObjects/CPF";

export class User {
  constructor({ fullName, cpf, phone, email }) {
    this._fullName = fullName
    this._cpf = new CPF({ cpf })
    this._phone = new Phone({ number: phone })
    this._email = email

    Object.freeze(this)
  }

  get fullName() { return this._fullName }

  get email() { return this._email }

  get cpf() { return this._cpf.value }
  get cpfFormated() { return this._cpf.formated }

  get phone() { return this._phone.number }
  get phoneFormated() { return this._phone.formated }
}


