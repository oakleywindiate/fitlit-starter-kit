import { expect } from 'chai';
import Sleep from '../src/Sleep';

describe('Sleep', () => {

  let sleep1;
  let sleepData;

  beforeEach(() => {

  sleepData = [
  {
    "userID": 1,
    "date": '2022/01/31',
    "hoursSlept": 10,
    "sleepQuality": 10,
  },
  {
    "userID": 1,
    "date": '2022/02/01',
    "hoursSlept": 6,
    "sleepQuality": 9,
  },
  {
    "userID": 1,
    "date": '2022/02/02',
    "hoursSlept": 7,
    "sleepQuality": 10,
  },
  {
    "userID": 1,
    "date": '2022/02/03',
    "hoursSlept": 5,
    "sleepQuality": 4,
  },
  {
    "userID": 1,
    "date": '2022/02/04',
    "hoursSlept": 6,
    "sleepQuality": 7,
  },
  {
    "userID": 1,
    "date": '2022/02/05',
    "hoursSlept": 9,
    "sleepQuality": 10,
  },
  {
    "userID": 1,
    "date": '2022/02/06',
    "hoursSlept": 7,
    "sleepQuality": 5,
  },
  {
    "userID": 1,
    "date": '2022/02/07',
    "hoursSlept": 8,
    "sleepQuality": 9,
  },
  {
    "userID": 2,
    "date": '2022/02/01',
    "hoursSlept": 10,
    "sleepQuality": 10,
  }];

    sleep1 = new Sleep(sleepData);
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleep1).to.be.an.instanceof(Sleep);
  });

  it('should be able to calculate daily average of sleep in hours', () => {
    expect(sleep1.sleepDailyAverage(1)).to.equal(7.25);
  });

  it('should be able to calculate daily average of sleep quality between one and ten (one is worth and ten is best)', () => {
    expect(sleep1.sleepQualityAverage(1)).to.equal(8);
  });

  it('should be able to show daily amount of sleep in hours on specific day', () => {
    expect(sleep1.sleepDailyAmount(1, '2022/02/03')).to.equal(5);
  });

  it.skip('should have sleep quality on specific day', () => {
    expect(sleep1.sleepDailyQuality()).to.equal();

  });

  it.skip('should be able to calculate hours slept for 7 days', () => {
    expect(sleep1.sleepSevenDTotal()).to.equal();

  });

  it.skip('should be able to calculate quality of sleep for 7 days', () => {
    expect(sleep1.sleepSevenDQuality()).to.equal();

  });

  it.skip('should be able to calculate average sleep quality for 7 days', () => {
    expect(sleep1.sleepSevenDQualityAve()).to.equal();

  });

});
