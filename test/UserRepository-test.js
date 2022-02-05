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


});
