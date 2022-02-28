import { expect } from 'chai';
import User from '../src/User';

describe('User', () => {

  let user1;
  let user2;
  let newUser1;
  let newUser2;

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

    user2 = {
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [9, 18, 24, 19]
    };

    newUser1 = new User(user1);
    newUser2 = new User(user2);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(newUser1).to.be.an.instanceof(User);
  });

  it('should have an id', () => {
    expect(newUser1.id).to.equal(1);
    expect(newUser2.id).to.equal(2);
  });

  it('should have a name', () => {
    expect(newUser1.name).to.equal("Luisa Hane");
    expect(newUser2.name).to.equal("Jarvis Considine");
  });

  it('should have an address', () => {
    expect(newUser1.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697");
    expect(newUser2.address).to.equal("30086 Kathryn Port, Ciceroland NE 07273");
  });

  it('should have an email', () => {
    expect(newUser1.email).to.equal("Diana.Hayes1@hotmail.com");
    expect(newUser2.email).to.equal("Dimitri.Bechtelar11@gmail.com");
  });

  it('should have a strideLength', () => {
    expect(newUser1.strideLength).to.equal(4.3);
    expect(newUser2.strideLength).to.equal(4.5);
  });

  it('should have a dailyStepGoal', () => {
    expect(newUser1.dailyStepGoal).to.equal(10000);
    expect(newUser2.dailyStepGoal).to.equal(5000);
  });

  it('should have a friends', () => {
    expect(newUser1.friends).to.deep.equal([16, 4, 8]);
    expect(newUser2.friends).to.deep.equal([9, 18, 24, 19]);
  });

  it('should to able to return user\s first name', () => {
    expect(newUser1.returnUserFirstName()).to.equal("Luisa");
    expect(newUser2.returnUserFirstName()).to.equal("Jarvis");
  });
});
