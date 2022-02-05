import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import userData from '../src/data/users.js';

describe('User Repository', () => {

  let userRepo;

  beforeEach(() => {
      userRepo = new UserRepository(userData)

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
    expect(userRepo.identifyUser(2)).to.equal({"id": 2,
    "name": "Jarvis Considine",
    "address": "30086 Kathryn Port, Ciceroland NE 07273",
    "email": "Dimitri.Bechtelar11@gmail.com",
    "strideLength": 4.5,
    "dailyStepGoal": 5000,
    "friends": [
      9,
      18,
      24,
      19
    ]});

});
