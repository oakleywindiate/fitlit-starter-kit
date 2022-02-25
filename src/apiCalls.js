let userData;
let sleepData;
let hydrationData;
let activityData;

const getAllFetch = () => {

  userData = fetch("http://localhost:3001/api/v1/users")
  .then(response => response.json())
  sleepData = fetch("http://localhost:3001/api/v1/sleep")
  .then(response => response.json())
  hydrationData = fetch("http://localhost:3001/api/v1/hydration")
  .then(response => response.json())
  activityData = fetch("http://localhost:3001/api/v1/activity")
  .then(response => response.json())

  .catch((error) => {
    return displayError(error)
  })
}


const displayError = (error) => {
  console.log(error,"errrrrror")
  console.log(error.message)
  if (error.message === "Failed to fetch!") {
    errorTag.innerText = "OPPS, SORRY! Something went wrong!";
  } else {
    errorTag.innerText = error.message;
  }
}


export {userData, sleepData, hydrationData, activityData, getAllFetch}
