import { expect } from 'chai';
import Activity from '../src/Activity';
import UserRepository from '../src/UserRepository';

describe('Activity', () => {

  let activity1;
  let activity2;
  let activityData;
  let userData;

  beforeEach(() => {

  userData = [
  {
    "id": 1,
    "name": "Luisa Hane",
    "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
    "email": "Diana.Hayes1@hotmail.com",
    "strideLength": 4.3,
    "dailyStepGoal": 10000,
    "friends": [16, 4, 8]
  },
  {
    "id": 2,
    "name": "Jarvis Considine",
    "address": "30086 Kathryn Port, Ciceroland NE 07273",
    "email": "Dimitri.Bechtelar11@gmail.com",
    "strideLength": 4.5,
    "dailyStepGoal": 5000,
    "friends": [9, 18, 24, 19]
  }];

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
    "numSteps": 16000,
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
    "date": '2022/01/31',
    "numSteps": 1000,
    "minutesActive": 20,
    "flightsOfStairs": 4,
  },
  {
    "userID": 2,
    "date": '2022/02/01',
    "numSteps": 12000,
    "minutesActive": 110,
    "flightsOfStairs": 18,
  },
  {
    "userID": 2,
    "date": '2022/02/02',
    "numSteps": 16000,
    "minutesActive": 100,
    "flightsOfStairs": 14,
  },
  {
    "userID": 2,
    "date": '2022/02/03',
    "numSteps": 4000,
    "minutesActive": 30,
    "flightsOfStairs": 8,
  },
  {
    "userID": 2,
    "date": '2022/02/04',
    "numSteps": 5000,
    "minutesActive": 80,
    "flightsOfStairs": 10,
  },
  {
    "userID": 2,
    "date": '2022/02/05',
    "numSteps": 8000,
    "minutesActive": 90,
    "flightsOfStairs": 6,
  },
  {
    "userID": 2,
    "date": '2022/02/06',
    "numSteps": 4000,
    "minutesActive": 40,
    "flightsOfStairs": 10,
  },
  {
    "userID": 2,
    "date": '2022/02/07',
    "numSteps": 9000,
    "minutesActive": 100,
    "flightsOfStairs": 16,
  }];

    activity1 = new Activity(activityData);
    activity2 = new Activity(activityData);
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    expect(activity1).to.be.an.instanceof(Activity);
    expect(activity2).to.be.an.instanceof(Activity);
  });

  // it.skip('should be able to identify a user by userID', () => {
  //   expect(activity1.identifyUser(1)).to.equal(activityData[0]);
  // });

  it('should be able to calculate the miles a user has walked based on their steps for a specific day', () => {
    expect(activity1.calculateMiles(userData[0])).to.equal('4.89');
    expect(activity2.calculateMiles(userData[1])).to.equal('7.67');
  });

  it('should be able to calculate the total number of minutes a user was active on a specific date', () => {
    expect(activity1.showMinutesActive(userData[0])).to.equal(60);
    expect(activity2.showMinutesActive(userData[1])).to.equal(100);
  });

  it('should be able to calculate the total number of minutes a user was active on a specific date', () => {
    expect(activity1.calculateAvgWeeklyMinActive(userData[0])).to.equal('75.71');
    expect(activity2.calculateAvgWeeklyMinActive(userData[1])).to.equal('78.57');
  });

  it('should be able to calculate if the user reached their step goal on a specific date', () => {
    expect(activity1.calculateStepGoal(userData[0])).to.equal('You did 60.00% of 100%!');
    expect(activity2.calculateStepGoal(userData[1])).to.equal('You did 180.00% of 100%!');
  });

  it('should be able to calculate if the user exceeded their step goal on any date', () => {
    expect(activity1.calculateDaysExceededStepGoal(userData[0])).to.equal('You exceeded your step goal 1 day(s).');
    expect(activity2.calculateDaysExceededStepGoal(userData[1])).to.equal('You exceeded your step goal 4 day(s).');
  });

  it('should be able to calculate a users all-time stair climbing record', () => {
    expect(activity1.showClimbingRecord(userData[0])).to.equal(20);
    expect(activity2.showClimbingRecord(userData[1])).to.equal(18);
  });

  it('should be able to calculate average stairs climbed for all users on a specific date', () => {
    expect(activity1.calculateAllUserAvgStairClimb()).to.equal(14);
  });

  it('should be able to calculate average steps taken for all users on a specific date', () => {
    expect(activity1.calculateAllUserAvgSteps()).to.equal(7500);
  });

  it('should be able to calculate average minutes active for all users on a specific date', () => {
    expect(activity1.calculateAllUserAvgMinActive()).to.equal(80);
  });
});
