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

  it('should have an id', () => {
    expect(sleep1.userID).to.equal(1);

  });

  it('should have a date', () => {
    expect(sleep1.date).to.equal('2022/02/01');
    
  });

});
