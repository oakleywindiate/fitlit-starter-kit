import { expect } from 'chai';
import HydrationRepository from '../src/HydrationRepository';


describe('Hydration Repository', () => {

  let sleepRepo;

  beforeEach(() => {
      hydrationRepo = new HydrationRepository(hydrationData)

    });

  it('should be a function', () => {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of HydrationRepository', () => {
    expect(hydrationRepo).to.be.an.instanceof(HydrationRepository);
  });

  it('should hold sleep data', () => {
    expect(hydrationRepo.sleepData).to.deep.equal(hydrationData);
  });


});
