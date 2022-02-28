import {show, hide, banner} from './scripts.js';
const errorTag = document.querySelector('.js-error');

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

const addSleepData = (sleepLog) => {
  fetch('http://localhost:3001/api/v1/sleep', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(sleepLog)
  })
  .then(response => {
    return checkErrors(response)
  })
  .catch((error) => displayError(error))
}
getAllFetch();

const addHydrationData = (hydroLog) => {
  fetch('http://localhost:3001/api/v1/hydration', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(hydroLog)
  })
  .then(response => {
    return checkErrors(response)
  })
  .catch((error) => displayError(error))
}
getAllFetch();

const addActivityData = (activityLog) => {
  fetch('http://localhost:3001/api/v1/activity', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(activityLog)
  })
  .then(response => {
    return checkErrors(response)
  })
  .catch((error) => displayError(error))
}
getAllFetch();

const displayError = (error) => {
  if (error.message === "Failed to fetch!") {
    errorTag.innerText = "OPPS, SORRY! Something went wrong!";
  } else {
    errorTag.innerText = error.message;
  }
}

const checkErrors = (response) => {
  if (!response.ok) {
    throw new Error("Please make sure all fields are filled up!!!")
  } else {
    response.json()
  }
}

const hydroForm = document.querySelector('#hydrationForm')
const sleepForm = document.querySelector('#sleepForm')
const activityForm = document.querySelector('#activityForm')

const submitHydroData = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const hydroLog = {
    userID: parseInt(formData.get('hydro-id')),
    date: formData.get('hydro-date'),
    numOunces: parseInt(formData.get('num-ounces')),
  };
  addHydrationData(hydroLog);
  e.target.reset();
  hide(hydroForm)
  show(buttonSection)
  show(banner)
}

const submitSleepData = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const sleepLog = {
    userID: parseInt(formData.get('sleep-id')),
    date: formData.get('sleep-date'),
    hoursSlept: parseInt(formData.get('sleep-hours')),
    sleepQuality: parseInt(formData.get('sleep-quality')),
  };
  addSleepData(sleepLog);
  e.target.reset();
  hide(sleepForm)
  show(buttonSection)
  show(banner)
}

const submitActivityData = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const activityLog = {
    userID: parseInt(formData.get('activity-id')),
    date: formData.get('activity-date'),
    numSteps: parseInt(formData.get('num-steps')),
    minutesActive: parseInt(formData.get('min-active')),
    flightsOfStairs: parseInt(formData.get('flights-climbed')),
  };
  addActivityData(activityLog);
  e.target.reset();
  hide(activityForm)
  show(buttonSection)
  show(banner)
}

hydroForm.addEventListener('submit', submitHydroData)
sleepForm.addEventListener('submit', submitSleepData)
activityForm.addEventListener('submit', submitActivityData)

export {userData, sleepData, hydrationData, activityData, getAllFetch}
