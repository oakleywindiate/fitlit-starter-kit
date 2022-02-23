import { expect } from 'chai';
import Activity from '../src/Activity';

describe('Activity', () => {

  let activity1;
  let activityData;

  beforeEach(() => {

  activityData = [
  {
    "userID": 1,
    "date": '2022/01/31',
    "numSteps": 100,
    "minutesActive": 10,
    "flightsOfStairs": 2,
  },
  {
    "userID": 1,
    "date": '2022/02/01',
    "numSteps": 10000,
    "minutesActive": 120,
    "flightsOfStairs": 20,
  },
  {
    "userID": 1,
    "date": '2022/02/02',
    "numSteps": 6000,
    "minutesActive": 100,
    "flightsOfStairs": 10,
  },
  {
    "userID": 1,
    "date": '2022/02/03',
    "numSteps": 2000,
    "minutesActive": 20,
    "flightsOfStairs": 6,
  },
  {
    "userID": 1,
    "date": '2022/02/04',
    "numSteps": 6000,
    "minutesActive": 90,
    "flightsOfStairs": 12,
  },
  {
    "userID": 1,
    "date": '2022/02/05',
    "numSteps": 8000,
    "minutesActive": 100,
    "flightsOfStairs": 14,
  },
  {
    "userID": 1,
    "date": '2022/02/06',
    "numSteps": 4000,
    "minutesActive": 40,
    "flightsOfStairs": 8,
  },
  {
    "userID": 1,
    "date": '2022/02/07',
    "numSteps": 6000,
    "minutesActive": 60,
    "flightsOfStairs": 12,
  },
  {
    "userID": 2,
    "date": '2022/02/01',
    "numSteps": 9000,
    "minutesActive": 100,
    "flightsOfStairs": 16,
  }];

    activity1 = new Activity(activityData);
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    expect(activity1).to.be.an.instanceof(Activity);
  });



  
});
