import { expect } from 'chai';
import Hydration from '../src/Hydration';

describe('Hydration', () => {

  let hydration1;
  let hydrationData;

  beforeEach(() => {

  hydrationData = [
  {
    "userID": 1,
    "date": '2022/01/31',
    "numOunces": 300,
  },
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
    "numOunces": 65,
  },
  {
    "userID": 2,
    "date": '2022/02/01',
    "numOunces": 100,
  }];

    hydration1 = new Hydration(hydrationData);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydration1).to.be.an.instanceof(Hydration);
  });

  it('should be able to calculate daily average amount of hydration in ounces', () => {
    expect(hydration1.calculateDailyDrinkAverage(1)).to.equal(81.25);
  });

  it('should be able to show daily amount of hydration in ounces consumed on most recent day', () => {
    expect(hydration1.showDailyDrinkAmount(1)).to.equal(65);
  });

  it('should be able to calculate daily amount of hydration in ounces for seven days', () => {
    expect(hydration1.calculate7DaysDrinkAverage(1)).to.deep.equal([30, 50, 60, 40, 50, 55, 65]);
  });
});
