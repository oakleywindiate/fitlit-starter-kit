class Activity {
  constructor(generalActivityData) {
    this.activityData = generalActivityData;
  }
  calculateMiles(user) {
    const findUser = this.activityData.filter(data => data.userID === user.id)
    const findIndex = findUser.length - 1;
    return ((findUser[findIndex].numSteps * user.strideLength) / 5280).toFixed(2);
  }
  showMinutesActive(user) {
    const findUser = this.activityData.filter(data => data.userID === user.id)
    const findIndex = findUser.length - 1;
    return findUser[findIndex].minutesActive;
  }
  calculateAvgWeeklyMinActive(user) {
    const findUser = this.activityData.filter(data => data.userID === user.id)
    const findIndex = findUser.length - 7;
    const findSevenDays = findUser.slice(findIndex)
    const reduceDays = findSevenDays.reduce((acc, day) => {
      return acc += day.minutesActive
    }, 0)
    return (reduceDays / 7).toFixed(2);
  }
  calculateStepGoal(user) {
    const findUser = this.activityData.filter(data => data.userID === user.id)
    const findIndex = findUser.length - 1;
    return ((findUser[findIndex].numSteps / user.dailyStepGoal) * 100).toFixed(2);
  }
}


export default Activity;
