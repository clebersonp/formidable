export class CPF {
  constructor({ cpf }) {
    this._cpf = cpf

    Object.freeze(this)
  }

  get cpf() {
    return this._cpf
  }

  get formated() {
    return this._cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, (fullMatch, partOne, partTwo, partThree, digit) => {
      return `${partOne}.${partTwo}.${partThree}-${digit}`
    })
  }
}
