import { expect } from 'chai';
import Sleep from '../src/Sleep';

describe('Sleep', () => {

  let sleep1;
  let sleep2;
  let sleepData;

  beforeEach(() => {

    sleepData = [
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
      "sleepQuality": 6,
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

    sleep1 = new Sleep(1, sleepData);
    sleep2 = new Sleep(2, sleepData);
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleep1).to.be.an.instanceof(Sleep);
  });

  it.skip('should have an id', () => {
    expect(sleep1.userID).to.equal(1);

  });

  it.skip('should have a date', () => {
    expect(sleep2.date).to.equal('2022/02/01');

  });

  it.skip('should have hours per night', () => {
    expect(sleep2.hoursSlept).to.equal(10);

  });

  it.skip('should have sleep quality of the night', () => {
    expect(sleep2.sleepQuality).to.equal(10);

  });



//METHOD TESTS

  it.skip('should have an average hours slept per day', () => {
    expect(sleep1.sleepDailyAverage()).to.equal();

  });

  it.skip('should have an average sleep quality per day', () => {
    expect(sleep1.sleepQualityAverage()).to.equal();

  });

  it.skip('should have hours slept on specific day', () => {
    expect(sleep1.sleepDailyAmount()).to.equal();

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
