import { expect } from '../setup'
import deepEqual from '../../../src/infra/deepEqual'

describe('infra/deepEqual', () => {
  describe('smoke tests', () => {
    it('should deepEqual be a function', () => {
      expect(deepEqual).to.be.a('function')
    })
  })
  describe('deepEqual()', () => {
    it(`should {a: 0, b: 'string'} be equal {a: 0, b: 'string'}`, () => {
      const obj = {a: 0, b: 'string'}
      expect(deepEqual(obj, {a: 0, b: 'string'})).to.be.equal(true)
      expect(deepEqual(obj, obj)).to.be.equal(true)
    })
  })
})
