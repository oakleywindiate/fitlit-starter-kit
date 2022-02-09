import { expect } from 'chai';
import Hydration from '../src/Hydration';

describe('Hydration', () => {

  let hydration;
  let hydrationData;

  beforeEach(() => {

    hydrationData = [
      {userID: 1}, {ouncesConsumed: 3}
    ];

    hydration = new Hydration();
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });


//IN PROGRESS
  it('should to able to calculate daily average in ounces', () => {
    expect(null.drinkDailyAverage()).to.equal("");
  });

  it('should to able to show daily amount consumed', () => {
    expect(null.drinkDailyAmount()).to.equal("");
  });

  it('should to able show seven day average', () => {
    expect(null.drinkSevenDayAve()).to.equal("");
  });

});
