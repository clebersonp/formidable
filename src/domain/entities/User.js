import Phone from '../valueObjects/Phone';
import CPF from '../valueObjects/CPF';

export default class User {
  constructor({
    fullName,
    cpf,
    phone,
    email,
  }) {
    this.fullName = fullName;
    this.cpf = new CPF({ CPFNumbers: cpf });
    this.phone = new Phone({ number: phone });
    this.email = email;

    Object.freeze(this);
  }

  getFullName = () => this.fullName

  getEmail = () => this.email

  getCPF = () => this.cpf.getValue()

  getCPFFormated = () => this.cpf.getValueFormated()

  getPhone = () => this.phone.getNumber()

  getPhoneFormated = () => this.phone.getNumberFormated()
}
