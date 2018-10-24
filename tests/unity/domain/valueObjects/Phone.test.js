import { expect } from '../../setup'
import Phone from '../../../../src/domain/valueObjects/Phone';

describe('domain/valueObjects/Phone', () => {
  it('should return pure Phone 0012345678', () => {
    const purePhoneValue = '0012345678'
    const impurePhoneValue = '00-1234-5678'

    const purePhone = new Phone({ number: purePhoneValue })
    const impurePhone = new Phone({ number: impurePhoneValue })

    expect(purePhone.getNumber()).to.be.equal(purePhoneValue)
    expect(impurePhone.getNumber()).to.be.equal(purePhoneValue)
  })

  it('should return formated Phone 00-1234-5678', () => {
    const purePhoneValue = '0012345678'
    const impurePhoneValue = '00-1234-5678'

    const purePhone = new Phone({ number: purePhoneValue })
    const impurePhone = new Phone({ number: impurePhoneValue })

    expect(purePhone.getNumberFormated()).to.be.equal(impurePhoneValue)
    expect(impurePhone.getNumberFormated()).to.be.equal(impurePhoneValue)
  })

  it('should return formated Phone 1234-5678', () => {
    const purePhoneValue = '12345678'
    const impurePhoneValue = '1234-5678'

    const purePhone = new Phone({ number: purePhoneValue })
    const impurePhone = new Phone({ number: impurePhoneValue })

    expect(purePhone.getNumberFormated()).to.be.equal(impurePhoneValue)
    expect(impurePhone.getNumberFormated()).to.be.equal(impurePhoneValue)
  })
})
