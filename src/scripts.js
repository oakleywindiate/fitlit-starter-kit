// --------- IMPORTS ---------
import './css/styles.css';
import { userData, sleepData, hydrationData, activityData, getAllFetch } from './apiCalls.js'
import './images/profile-svgrepo-com.png'
import './images/water-svgrepo-com.png'
import './images/beds-sleep-svgrepo-com.png'
import './images/shoe-svgrepo-com.png'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';
import Activity from './Activity';
import {hydrationChart, activityChart, sleepChart} from './charts.js';
import {displayHydroData, displayUserData, displaySleepTicker, displayHydroTicker, displayActivityTicker} from './domUpdates.js';

//----------QUERY-SELECTORS------

const buttonSection = document.querySelector('#buttonSection')
const hydrationForm = document.querySelector('#hydrationForm')
const sleepForm = document.querySelector('#sleepForm')
const activityForm = document.querySelector('#activityForm')

// --------- FUNCTIONS ---------

const onLoad = () => {
  getAllFetch();
  Promise.all([userData, sleepData, hydrationData, activityData])
  .then(data => classInstantiation(data))
}

const classInstantiation = (data) => {
  let users = data[0].userData.map(user => new User(user))
  let hydroData = new Hydration(data[2].hydrationData)
  let sleepData = new Sleep(data[1].sleepData)
  let userRepo = new UserRepository(users)
  let user1 = userRepo.userData[getRandomIndex(userRepo.userData)]
  manageHydroData(hydroData, user1)
  manageSleepData(sleepData, user1)
  displayUserData(userRepo, user1)
  manageActivityData(data, user1)
}

const manageHydroData = (hydroData, user1) => {
  const ctx = document.getElementById('myChart1').getContext('2d');
  let h2oAvg = hydroData.calculateDailyDrinkAvg(user1.id)
  let h2oToday = hydroData.showDailyDrinkAmount(user1.id)
  let h2oSevenDay = hydroData.show7DaysDrinkAmount(user1.id)
  displayHydroTicker(h2oSevenDay)
  hydrationChart(ctx, h2oAvg, h2oToday)
}

const manageSleepData = (sleepData, user1) => {
  const ctx3 = document.getElementById('myChart3').getContext('2d');
  let dailySleep = sleepData.showDailySleepAmount(user1.id)
  let sleepQuality = sleepData.showDailySlQuality(user1.id)
  let sleepSevenDay = sleepData.show7DaysSleepAmount(user1.id)
  let sleepQualityWeek = sleepData.show7DaysSlQuality(user1.id)
  let sleepDailyAverage = sleepData.calculateDailySleepAvg(user1.id)
  let sleepQualityAverage = sleepData.calculateDailySlQualityAvg(user1.id)
  displaySleepTicker(sleepSevenDay, sleepQualityWeek)
  sleepChart(ctx3, dailySleep, sleepQuality)
}

const manageActivityData = (data, user1) => {
  const ctx2 = document.getElementById('myChart2').getContext('2d');
  const activityData = new Activity(data[3].activityData)
  let dailyMiles = activityData.calculateMiles(user1)
  let avgUserSteps = activityData.calculateAllUserAvgSteps()
  let avgUserMinActive = activityData.calculateAllUserAvgMinActive()
  let avgUserStairsClimbed = activityData.calculateAllUserAvgStairClimb()
  displayActivityTicker(dailyMiles, avgUserSteps, avgUserMinActive, avgUserStairsClimbed)
  activityChart(ctx2, data[3], user1.id)
}

const openForm = () => {
  if (event.target.className == 'hydration-data' ) {
    show(hydrationForm)
    hide(buttonSection)
  }
  else if (event.target.className == 'sleep-data' ) {
    show(sleepForm)
    hide(buttonSection)
  }
  else if (event.target.className == 'activity-data' ) {
    show(activityForm)
    hide(buttonSection)
  }
}

const show = (section) => {
  section.classList.toggle('hidden')
}

const hide = (section) => {
  section.classList.toggle('hidden')
}

const getRandomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
};

window.addEventListener('load', onLoad)
window.addEventListener('click', openForm)
export {show, hide};
