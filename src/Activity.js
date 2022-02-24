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
    console.log(findUser[findIndex].minutesActive)
    return findUser[findIndex].minutesActive;
  }
}


export default Activity;
