import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import userData from '../src/data/users.js';

describe('User Repository', () => {

  let userRepo;

  beforeEach(() => {
      userRepo = new UserRepository(userData)

    });

  it('should be a function', function () {
    expect(UserRepository).to.be.a('function');
  });

});
