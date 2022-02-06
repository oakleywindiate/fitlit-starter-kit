
class UserRepository {
  constructor(userData) {
    this.userData = userData;
  }
  identifyUser(id) {
    return this.userData.find((user) => user.id === id)
  }
  averageStepGoal() {
    const stepGoals = this.userData.map(steps => {
      return steps.dailyStepGoal
    })
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    return ((stepGoals.reduce(reducer)) / stepGoals.length);
  }
}


export default UserRepository;
