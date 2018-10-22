export class Phone {
  constructor({ number }) {
    this._number = number
    Object.freeze(this)
  }

  get number() {
    return this._number
  }

  get formated() {
    return this._number.replace(/(\d{2})?(\d{4})(\d{4})/, (fullMatch, ddd, numberPartOne, numberPartTwo) => {
      if(ddd) return `${ddd}-${numberPartOne}-${numberPartTwo}`

      return `${numberPartOne}-${numberPartTwo}`
    })
  }
}
