// --------- IMPORTS ---------

import './css/styles.css';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import {userData, sleepData, activityData, hydrationData} from './apiCalls.js'
import './images/turing-logo.png'
import './images/profile-svgrepo-com.svg'
import './charts.js'
import UserRepository from './UserRepository';
import User from './User';
import Hydration from './Hydration';

// --------- QUERY SELECTORS/VARIABLES ---------

const userName = document.querySelector('#userName')
const userAddress = document.querySelector('#userAddress')
const userEmail = document.querySelector('#userEmail')
const welcomeBanner = document.querySelector('#welcomeBanner')
const userStepAverage = document.querySelector('#userStepAverage')


// --------- FUNCTIONS ---------

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
    console.log(data)
    return data;
  })

})

const displayHydration = (data) => {
  console.log(data)
  let hydration = new Hydration(data.hydrationData);

  return
}
window.addEventListener('load', displayUser)
