
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
  stepComparison() {
    let average = userRepo.averageStepGoal()
    let result = (user1.dailyStepGoal - average) / user1.dailyStepGoal
    return `Your daily step goal is ${result} above the average user!`
  }
}


export default UserRepository;
