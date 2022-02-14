// --------- IMPORTS ---------
import './css/styles.css';
import { userData, sleepData, hydrationData, activityData } from './apiCalls.js'
import './images/turing-logo.png'
import './images/profile-svgrepo-com.svg'
// import './images/sleep.svg'
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';
import Sleep from './Sleep';
import {hydrationChart, stepChart, sleepChart, foodChart} from './charts.js'

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
  .then(data => manageData(data) )
}

const makeCharts = (data, h2oAvg, h2oToday, dailySleep, sleepQuality) => {
  const ctx = document.getElementById('myChart1').getContext('2d');
  const ctx2 = document.getElementById('myChart2').getContext('2d');
  const ctx3 = document.getElementById('myChart3').getContext('2d');
  const ctx4 = document.getElementById('myChart4').getContext('2d');
  hydrationChart(ctx, h2oAvg, h2oToday)
  stepChart(ctx2, data[3])
  sleepChart(ctx3, dailySleep, sleepQuality)
  foodChart(ctx4, 'banana')
}

const manageData = (data) => {
  let users = data[0].userData.map(user => new User(user))
  let userRepo = new UserRepository(users)
  const user1 = userRepo.userData[getRandomIndex(userRepo.userData)]
  let hydroData = new Hydration(data[2].hydrationData)
  let h2oAvg = hydroData.drinkDailyAverage(user1.id)
  let sleepData = new Sleep(data[1].sleepData)
  let dailySleep = sleepData.sleepDailyAmount(user1.id)
  let sleepQuality = sleepData.sleepDailyQuality(user1.id)
  let sleepSevenDay = sleepData.sleepSevenDaysData(user1.id)
  let sleepQualityWeek = sleepData.sleepSevenDaysQualityData(user1.id)
  let sleepDailyAverage = sleepData.sleepDailyAverage(user1.id)
  let sleepQualityAverage = sleepData.sleepQualityAverage(user1.id)
  let h2oToday = hydroData.drinkDailyAmount(user1.id)
  let h2oSevenDay = hydroData.drinkSevenDaysData(user1.id)
  console.log('sleep', )
  console.log()

  makeCharts(data, h2oAvg, h2oToday, dailySleep, sleepQuality,)
  displayUser(userRepo, user1, h2oSevenDay, sleepSevenDay, sleepQualityWeek, sleepQualityAverage, sleepDailyAverage)
}

const displayUser = (userRepo, user1, h2oSevenDay, sleepSevenDay, sleepQualityWeek, sleepQualityAverage, sleepDailyAverage) => {
  // console.log(user1.id)
  let name = user1.returnUserFirstName()
  welcomeBanner.innerText = `Welcome, ${name}!`
  userName.innerText = user1.name
  userAddress.innerText = user1.address
  userEmail.innerText = user1.email
  userStepAverage.innerText = user1.stepComparison(userRepo, user1)
  sleepWeek.innerText = `Hours Slept Per Day This Week: ${sleepSevenDay}`
  sleepAvg.innerText = `Sleep Quality Per Day This Week: ${sleepQualityWeek}`
  allTimeQuality.innerText = `All Time Average Sleep Quality: ${sleepQualityAverage}`
  allTimeHours.innerText = `All Time Average Sleep Hours: ${sleepDailyAverage}`
  waterWeek.innerText = `Water Consumed Per Day This Week: ${h2oSevenDay}`
  return
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

window.addEventListener('load', onLoad)
