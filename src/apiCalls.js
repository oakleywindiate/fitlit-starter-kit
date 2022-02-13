const userData = fetch("https://fitlit-api.herokuapp.com/api/v1/users")
.then(response => response.json())
const sleepData = fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
.then(response => response.json())
const hydrationData = fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
.then(response => response.json())
const activityData = fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
.then(response => response.json())

export {userData, sleepData, hydrationData, activityData}
