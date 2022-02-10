import { expect } from 'chai';
import UserRepository from '../src/SleepRepository';


describe('Sleep Repository', () => {

  let sleepRepo;

  beforeEach(() => {
      sleepRepo = new UserRepository(sleepData)

    });

  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of SleepRepository', () => {
    expect(sleepRepo).to.be.an.instanceof(SleepRepository);
  });

  it('should hold sleep data', () => {
    expect(sleepRepo.sleepData).to.deep.equal(sleepData);
  });

  
});
