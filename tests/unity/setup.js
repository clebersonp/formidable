import chai, { expect } from 'chai'
import sinonChai from 'sinon-chai';
chai.use(sinonChai);


import '../mocks/localStorage'
import '../mocks/requestAnimationFrame'
import '../mocks/fetch'

export {
  expect
};
