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

const addSleepData = () => {
  fetch(sleepData, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "userID": enterID,
      "date": enterDate,
      "hoursSlept": enterHoursSlept,
      "sleepQuality": enterSleepQuality,
    })
  })
  .then(response => {
    return checkErrors(response)
  })
  .then(data => addSleepToPage(data))
  .catch((error) => displayError(error))
}
getAllFetch();


const addHydrationData = () => {
  fetch(hydrationData, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "userID": enterID,
      "date": enterDate,
      "numOunces": enterNumOunces,
    })
  })
  .then(response => {
    return checkErrors(response)
  })
  .then(data => addHydrationToPage(data))
  .catch((error) => displayError(error))
}
getAllFetch();

const addActivityData = () => {
  fetch(activityData, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "userID": enterID,
      "date": enterDate,
      "flightsOfStairs": enterFlightsOfStairs,
      "minutesActive": enterMinutesActive,
      "numSteps": enterNumSteps,
    })
  })
  .then(response => {
    return checkErrors(response)
  })
  .then(data => addActivityToPage(data))
  .catch((error) => displayError(error))
}
getAllFetch();


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
