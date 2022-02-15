class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.address = user.address;
    this.email = user.email;
    this.strideLength = user.strideLength;
    this.dailyStepGoal = user.dailyStepGoal;
    this.friends = user.friends;
  }

  returnUserFirstName() {
    const name = this.name.split(" ");
    return name[0];
  }

  stepComparison(userRepo, user1) {
    const average = userRepo.averageStepGoal();
    const result = (user1.dailyStepGoal - average) / user1.dailyStepGoal;
    return `Your daily step goal is ${result}% above the average user!`;
  }
}

export default User;
