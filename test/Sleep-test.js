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
    "date": '2022/01/31',
    "hoursSlept": 5,
    "sleepQuality": 9,
  },
  {
    "userID": 2,
    "date": '2022/02/01',
    "hoursSlept": 6,
    "sleepQuality": 7,
  },
  {
    "userID": 2,
    "date": '2022/02/02',
    "hoursSlept": 8,
    "sleepQuality": 4,
  },
  {
    "userID": 2,
    "date": '2022/02/03',
    "hoursSlept": 7,
    "sleepQuality": 4,
  },
  {
    "userID": 2,
    "date": '2022/02/04',
    "hoursSlept": 8,
    "sleepQuality": 5,
  },
  {
    "userID": 2,
    "date": '2022/02/05',
    "hoursSlept": 8,
    "sleepQuality": 10,
  },
  {
    "userID": 2,
    "date": '2022/02/06',
    "hoursSlept": 9,
    "sleepQuality": 5,
  },
  {
    "userID": 2,
    "date": '2022/02/07',
    "hoursSlept": 10,
    "sleepQuality": 3,
  }];

    sleep1 = new Sleep(sleepData);
    sleep2 = new Sleep(sleepData);
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleep1).to.be.an.instanceof(Sleep);
  });

  it('should be able to calculate daily average amount of sleep in hours', () => {
    expect(sleep1.calculateDailySleepAvg(1)).to.equal(7);
    expect(sleep2.calculateDailySleepAvg(2)).to.equal(8);
  });

  it('should be able to calculate daily average of sleep quality with rating between one and ten (one is worst and ten is best)', () => {
    expect(sleep1.calculateDailySlQualityAvg(1)).to.equal(8);
    expect(sleep2.calculateDailySlQualityAvg(2)).to.equal(6);
  });

  it('should be able to show daily amount of sleep in hours on specific day', () => {
    expect(sleep1.showDailySleepAmount(1)).to.equal(8);
    expect(sleep2.showDailySleepAmount(2)).to.equal(10);
  });

  it('should be able to show daily amount of sleep quality between one and ten on specific day', () => {
    expect(sleep1.showDailySlQuality(1)).to.equal(9);
    expect(sleep2.showDailySlQuality(2)).to.equal(3);
  });

  it('should be able to show daily amount of sleep in hours for seven days', () => {
    expect(sleep1.show7DaysSleepAmount(1)).to.deep.equal([6, 7, 5, 6, 9, 7, 8]);
    expect(sleep2.show7DaysSleepAmount(2)).to.deep.equal([6, 8, 7, 8, 8, 9, 10]);
  });

  it('should be able to show daily amount of quality sleep between one and ten for seven days', () => {
    expect(sleep1.show7DaysSlQuality(1)).to.deep.equal([9, 10, 4, 7, 10, 5, 9]);
    expect(sleep2.show7DaysSlQuality(2)).to.deep.equal([7, 4, 4, 5, 10, 5, 3]);
  });

  it('should be able to calculate daily average of sleep quality between one and ten for ALL users', () => {
    expect(sleep1.calculateSlQualityAvgAll()).to.equal(7);
  });
});
