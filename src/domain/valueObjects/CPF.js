export class CPF {
  constructor({ cpf }) {
    console.log(cpf)
    this._value = cpf

    Object.freeze(this)
  }

  get value() {
    return this._value
  }

  get formated() {
    console.log(this._value)
    return this._value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, (fullMatch, partOne, partTwo, partThree, digit) => {
      return `${partOne}.${partTwo}.${partThree}-${digit}`
    })
  }
}
