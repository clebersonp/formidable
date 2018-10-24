import { expect } from '../../setup'
import CPF from '../../../../src/domain/valueObjects/CPF';

describe('domain/valueObjects/CPF', () => {
  it('should return pure CPF', () => {
    const pureCPFValue = '04080757247'
    const impureCPFValue = '040.807.572-47'

    const pureCPF = new CPF({ CPFNumbers: pureCPFValue })
    const impureCPF = new CPF({ CPFNumbers: impureCPFValue })

    expect(pureCPF.getValue()).to.be.equal(pureCPFValue)
    expect(impureCPF.getValue()).to.be.equal(pureCPFValue)
  })

  it('should return formated CPF', () => {
    const pureCPFValue = '04080757247'
    const impureCPFValue = '040.807.572-47'

    const pureCPF = new CPF({ CPFNumbers: pureCPFValue })
    const impureCPF = new CPF({ CPFNumbers: impureCPFValue })

    expect(pureCPF.getValueFormated()).to.be.equal(impureCPFValue)
    expect(impureCPF.getValueFormated()).to.be.equal(impureCPFValue)
  })
})
