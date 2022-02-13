import { expect } from 'chai';
import Sleep from '../src/Sleep';

describe('Sleep', () => {

  let sleep1;
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
    }];

    sleep1 = new Sleep(1, sleepData);
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

//FUTURE TEST FILES HERE

});
