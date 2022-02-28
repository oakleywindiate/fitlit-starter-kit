import { expect } from 'chai';
import UserRepository from '../src/UserRepository';

describe('User Repository', () => {

  let userRepo;
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

    userRepo = new UserRepository(userData);
  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', () => {
    expect(userRepo).to.be.an.instanceof(UserRepository);
  });

  it('should hold user data', () => {
    expect(userRepo.userData).to.deep.equal(userData);
  });

  it('should be able to identify user based on their ID', () => {
    expect(userRepo.identifyUser(1)).to.deep.equal({  "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [16, 4, 8]
    });

    expect(userRepo.identifyUser(2)).to.deep.equal({"id": 2,
    "name": "Jarvis Considine",
    "address": "30086 Kathryn Port, Ciceroland NE 07273",
    "email": "Dimitri.Bechtelar11@gmail.com",
    "strideLength": 4.5,
    "dailyStepGoal": 5000,
    "friends": [9, 18, 24, 19]
    });
  });

  it('should find the average step goal amongst users', () => {
    expect(userRepo.averageStepGoal()).to.equal(7500);
  });
});
