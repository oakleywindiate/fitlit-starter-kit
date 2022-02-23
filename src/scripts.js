// --------- IMPORTS ---------

import './css/styles.css';
import { userData, sleepData, hydrationData, activityData } from './apiCalls.js'
import './images/turing-logo.png'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';
import {hydrationChart, stepChart, sleepChart, foodChart} from './charts.js';
import {displayHydroData, displaySleepData, displayUserData} from './domUpdates.js';

// --------- QUERY SELECTORS/VARIABLES ---------

const userName = document.querySelector('#userName')
const userAddress = document.querySelector('#userAddress')
const userEmail = document.querySelector('#userEmail')
const welcomeBanner = document.querySelector('#welcomeBanner')
const userStepAverage = document.querySelector('#userStepAverage')
const sleepWeek = document.querySelector('#sleepWeek')
const sleepAvg = document.querySelector('#sleepAvg')
const allTimeHours = document.querySelector('#allTimeHours')
const allTimeQuality = document.querySelector('#allTimeQuality')
const waterWeek = document.querySelector('#waterWeek')

// --------- FUNCTIONS ---------

const onLoad = () => {
  Promise.all([userData, sleepData, hydrationData, activityData])
  .then(data => classInstantiation(data))
  .catch(error => console.log('Ops, error here!'))
}

const classInstantiation = (data) => {
  let users = data[0].userData.map(user => new User(user))
  let hydroData = new Hydration(data[2].hydrationData)
  let sleepData = new Sleep(data[1].sleepData)
  let userRepo = new UserRepository(users)
  let user1 = userRepo.userData[getRandomIndex(userRepo.userData)]
  // manageData(data,  userRepo)
  manageHydroData(hydroData, user1)
  manageSleepData(sleepData, user1)
  displayUserData(userRepo, user1)
  manageActivityData(data)
}

const manageHydroData = (hydroData, user1) => {
  const ctx = document.getElementById('myChart1').getContext('2d');
  let h2oAvg = hydroData.drinkDailyAverage(user1.id)
  let h2oToday = hydroData.drinkDailyAmount(user1.id)
  let h2oSevenDay = hydroData.drinkSevenDaysData(user1.id)
  displayHydroData(h2oSevenDay)
  hydrationChart(ctx, h2oAvg, h2oToday)
}

const manageSleepData = (sleepData, user1) => {
  const ctx3 = document.getElementById('myChart3').getContext('2d');
  let dailySleep = sleepData.sleepDailyAmount(user1.id)
  let sleepQuality = sleepData.sleepDailyQuality(user1.id)
  let sleepSevenDay = sleepData.sleepSevenDaysData(user1.id)
  let sleepQualityWeek = sleepData.sleepSevenDaysQualityData(user1.id)
  let sleepDailyAverage = sleepData.sleepDailyAverage(user1.id)
  let sleepQualityAverage = sleepData.sleepQualityAverage(user1.id)
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
