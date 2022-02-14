class UserRepository {
  constructor(users) {
    this.userData = users;
  }

  identifyUser(id) {
    return this.userData.find(user => user.id === id);
  }

  averageStepGoal() {
    const stepGoals = this.userData.map(steps => {
    return steps.dailyStepGoal;
    });
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return Math.round((stepGoals.reduce(reducer)) / stepGoals.length);
  }
}

export default UserRepository;
