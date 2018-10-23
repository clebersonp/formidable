export default class Phone {
  constructor({ number }) {
    this.number = number;
    Object.freeze(this);
  }

  getNumber = () => this.number;

  getNumberFormated = () => this.number.replace(/(\d{2})?(\d{4})(\d{4})/, (fullMatch, ddd, numberPartOne, numberPartTwo) => {
    if (ddd) return `${ddd}-${numberPartOne}-${numberPartTwo}`;

    return `${numberPartOne}-${numberPartTwo}`;
  })
}
