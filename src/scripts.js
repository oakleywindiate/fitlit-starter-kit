// --------- IMPORTS ---------

import './css/styles.css';
import { userData, sleepData, hydrationData, activityData, getAllFetch } from './apiCalls.js'
import './images/turing-logo.png'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';
import {hydrationChart, stepChart, sleepChart, foodChart} from './charts.js';
import {displayHydroData, displaySleepData, displayUserData, displayTickerItems} from './domUpdates.js';

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
  console.log(userRepo)
  let user1 = userRepo.userData[getRandomIndex(userRepo.userData)]
  // manageData(data,  userRepo)
  manageHydroData(hydroData, user1)
  manageSleepData(sleepData, user1)
  displayUserData(userRepo, user1)
  manageActivityData(data)
}

const manageHydroData = (hydroData, user1) => {
  const ctx = document.getElementById('myChart1').getContext('2d');
  let h2oAvg = hydroData.calculateDailyDrinkAvg(user1.id)
  let h2oToday = hydroData.showDailyDrinkAmount(user1.id)
  let h2oSevenDay = hydroData.show7DaysDrinkAmount(user1.id)
  displayHydroData(h2oSevenDay)
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
  displaySleepData(sleepSevenDay, sleepQualityWeek, sleepQualityAverage, sleepDailyAverage)
  sleepChart(ctx3, dailySleep, sleepQuality)
}

const manageActivityData = (data) => {
  const ctx2 = document.getElementById('myChart2').getContext('2d');
  const ctx4 = document.getElementById('myChart4').getContext('2d');
  stepChart(ctx2, data[3])
  foodChart(ctx4)
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

window.addEventListener('load', onLoad)
