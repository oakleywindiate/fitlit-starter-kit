import { expect } from 'chai';
import Hydration from '../src/Hydration';

describe('Hydration', () => {

  let hydration;

  beforeEach(() => {

    hydration = new Hydration();
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });



});
