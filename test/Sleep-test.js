import { expect } from 'chai';
import Sleep from '../src/Sleep';

describe('Sleep', () => {

  let sleep;

  beforeEach(() => {

    sleep = new Sleep();
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  });



});
