export default class CPF {
  constructor({ CPFNumbers }) {
    this.CPFNumbers = CPFNumbers;

    Object.freeze(this);
  }

  getValue = () => this.CPFNumbers

  getValueFormated = () => {
    const CPFRegex = /(\d{3})(\d{3})(\d{3})(\d{2})/;
    this.CPFNumbers.replace(CPFRegex, (fullMatch, partOne, partTwo, partThree, digit) => `${partOne}.${partTwo}.${partThree}-${digit}`);
  }
}
