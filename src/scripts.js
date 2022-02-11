// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
// import Chart from './chart.js/auto';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/profile-svgrepo-com.svg'
console.log('This is the JavaScript entry file - your code begins here.');
// An example of how you tell webpack to use a JS file
import './charts.js'
import './apiCalls.js'
// import data from './apiCalls.js';
import UserRepository from './UserRepository';
import User from './User';

const userName = document.querySelector('#userName')
const userAddress = document.querySelector('#userAddress')
const userEmail = document.querySelector('#userEmail')
const welcomeBanner = document.querySelector('#welcomeBanner')
const userStepAverage = document.querySelector('#userStepAverage')

// const createRepo = (data) => {
//   let userRepo = new UserRepository(data.userData)
//   return userRepo
// }
// console.log(userRepo)
// let userRepo = new UserRepository(sendData())
// let user1 = new User(userRepo.identifyUser(1))

// const stepComparison = () => {
//   let average = userRepo.averageStepGoal()
//   let result = (user1.dailyStepGoal - average) / user1.dailyStepGoal
//   return `Your daily step goal is ${result} above the average user!`
// }

const displayUser = () => {
  let name = user1.returnUserFirstName()
  welcomeBanner.innerText = `Welcome, ${name}!`
  userName.innerText = user1.name
  userAddress.innerText = user1.address
  userEmail.innerText = user1.email
  userStepAverage.innerText = user1.stepComparison()
  return
}

window.addEventListener('load', displayUser)
