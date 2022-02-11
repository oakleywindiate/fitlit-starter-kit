// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import {userData, sleepData, activityData, hydrationData} from './apiCalls.js'
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
import './images/profile-svgrepo-com.svg'
console.log('This is the JavaScript entry file - your code begins here.');
// An example of how you tell webpack to use a JS file
import './charts.js'
// import './apiCalls.js'
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
// console.log("hydrationData", data.hydrationData[0].userID)

const displayUser = (data) => {
  let userRepo = new UserRepository(data.userData)
  let user1 = new User(userRepo.identifyUser(1))
  let name = user1.returnUserFirstName()
  welcomeBanner.innerText = `Welcome, ${name}!`
  userName.innerText = user1.name
  userAddress.innerText = user1.address
  userEmail.innerText = user1.email
  userStepAverage.innerText = user1.stepComparison(userRepo, user1)
  return
}

Promise.all([userData, sleepData, activityData, hydrationData])

.then(data => {
  data.forEach(response => {
    process(response.json());
  })
})

const process = (prom => {
  const result = prom.then(data => {
    displayUser(data)
    return data;
  })

})

window.addEventListener('load', displayUser)
