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
    const findPercent = ((findUser[findIndex].numSteps / user.dailyStepGoal) * 100).toFixed(2);
    return `You did ${findPercent}% of 100%!`
  }

  calculateDaysExceededStepGoal(user) {
    let counter = 0
    const findUser = this.activityData.filter(data => data.userID === user.id)
    const mapUsers = findUser.map(person => {
      if (person.numSteps > user.dailyStepGoal) {
        counter++
      }
      return counter
    })
    return `You exceeded your step goal ${counter} day(s).`
  }

  showClimbingRecord(user) {
    const findUser = this.activityData.filter(data => data.userID === user.id)
    const sortUser = findUser.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs)
    return sortUser[0].flightsOfStairs;
  }

  calculateAllUserAvgStairClimb() {
    const findLatestLog = this.activityData.filter(data => data.date === this.activityData[this.activityData.length - 1].date)
    const findStairsClimbed = findLatestLog.reduce((acc, log) => {
      return acc += log.flightsOfStairs
    }, 0)
    return (findStairsClimbed / findLatestLog.length)
  }

  calculateAllUserAvgSteps() {
    const findLatestLog = this.activityData.filter(data => data.date === this.activityData[this.activityData.length - 1].date)
    const findStepsTaken = findLatestLog.reduce((acc, log) => {
      return acc += log.numSteps
    }, 0)
    return (findStepsTaken / findLatestLog.length)
  }

  calculateAllUserAvgMinActive() {
    const findLatestLog = this.activityData.filter(data => data.date === this.activityData[this.activityData.length - 1].date)
    const findMinActive = findLatestLog.reduce((acc, log) => {
      return acc += log.minutesActive
    }, 0)
    return (findMinActive / findLatestLog.length)
  }
}

export default Activity;
