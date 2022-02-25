const userData = fetch("http://localhost:3001/api/v1/users")
.then(response => response.json())
const sleepData = fetch("http://localhost:3001/api/v1/sleep")
.then(response => response.json())
const hydrationData = fetch("http://localhost:3001/api/v1/hydration")
.then(response => response.json())
const activityData = fetch("http://localhost:3001/api/v1/activity")
.then(response => response.json())

export {userData, sleepData, hydrationData, activityData}
