import { expect } from 'chai';
import Hydration from '../src/Hydration';

describe('Hydration', () => {

  let hydration1;
  let hydrationData;

  beforeEach(() => {

  hydration1 = [
  {
    "userID": 1,
    "date": '2022/02/01',
    "numOunces": 30,
  },
  {
    "userID": 1,
    "date": '2022/02/02',
    "numOunces": 50,
  },
  {
    "userID": 1,
    "date": '2022/02/03',
    "numOunces": 60,
  },
  {
    "userID": 1,
    "date": '2022/02/04',
    "numOunces": 40,
  },
  {
    "userID": 1,
    "date": '2022/02/05',
    "numOunces": 50,
  },
  {
    "userID": 1,
    "date": '2022/02/06',
    "numOunces": 55,
  },
  {
    "userID": 1,
    "date": '2022/02/07',
    "numOunces": 55,
  }];

    hydration1 = new Hydration(hydrationData);

  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });


//IN PROGRESS
  it('should to able to calculate daily average in ounces', () => {
    expect(hydration1.drinkDailyAverage()).to.equal("7 day average here");
  });

  it('should to able to show daily amount consumed on specific day', () => {
    expect(hydration1.drinkDailyAmount('2022/02/02')).to.equal(60);
  });

  it('should to able show data for seven days', () => {
    expect(hydration1.drinkSevenDayAve()).to.equal("array of all data for 1 user?");
  });

});
