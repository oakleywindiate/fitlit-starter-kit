// --------- IMPORTS ---------
import './css/styles.css';
import {userData, sleepData, hydrationData} from './apiCalls.js'
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
const onLoad = () => {
  Promise.all([userData, sleepData, hydrationData])
  .then(data => manageData(data) )
}

const manageData = (data) => {
  let users = data[0].userData.map(user => new User(user))
  let userRepo = new UserRepository(users)
  let hydroData = data[2].hydrationData.map(hydro => new Hydration(hydro))
  displayUser(userRepo)
}

const displayUser = (userRepo) => {
  const user1 = userRepo.userData[getRandomIndex(userRepo.userData)]
  let name = user1.returnUserFirstName()
  welcomeBanner.innerText = `Welcome, ${name}!`
  userName.innerText = user1.name
  userAddress.innerText = user1.address
  userEmail.innerText = user1.email
  userStepAverage.innerText = user1.stepComparison(userRepo, user1)
  return
}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
};

window.addEventListener('load', onLoad)
