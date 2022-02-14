import { expect } from 'chai';
import User from '../src/User';

describe('User', () => {

  let user1;
  let newUser1;

  beforeEach(() => {

    user1 = {
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [16, 4, 8],
    };

    newUser1 = new User(user1);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(newUser1).to.be.an.instanceof(User);
  });

  it('should have an id', () => {
    expect(newUser1.id).to.equal(1);
  });

  it('should have a name', () => {
    expect(newUser1.name).to.equal("Luisa Hane");
  });

  it('should have an address', () => {
    expect(newUser1.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697");
  });

  it('should have an email', () => {
    expect(newUser1.email).to.equal("Diana.Hayes1@hotmail.com");
  });

  it('should have a strideLength', () => {
    expect(newUser1.strideLength).to.equal(4.3);
  });

  it('should have a dailyStepGoal', () => {
    expect(newUser1.dailyStepGoal).to.equal(10000);
  });

  it('should have a friends', () => {
    expect(newUser1.friends).to.deep.equal([16, 4, 8]);
  });

  it('should to able to return user\s first name', () => {
    expect(newUser1.returnUserFirstName()).to.equal("Luisa");
  });
});
