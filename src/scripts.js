// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

console.log(userData,"<>>>>userData")
// An example of how you tell webpack to use a CSS file
import './css/styles.css';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'

console.log('This is the JavaScript entry file - your code begins here.');

// An example of how you tell webpack to use a JS file

import userData from './data/users';

import UserRepository from './UserRepository';
import User from './User';


const userName = document.querySelector('#userName')
const userAddress = document.querySelector('#userAddress')
const userEmail = document.querySelector('#userEmail')
const welcomeBanner = document.querySelector('#welcomeBanner')
const userStepAverage = document.querySelector('#userStepAverage')


let userRepo = new UserRepository(userData)
let user1 = new User(userRepo.identifyUser(1))
console.log(user1.returnUserFirstName())
console.log(userRepo.averageStepGoal())

const stepComparison = () => {

  let average = userRepo.averageStepGoal()
  let result = (user1.dailyStepGoal - average) / user1.dailyStepGoal
  console.log(`Your goal is ${result} above the average user!`)
  return `Your daily step goal is ${result} above the average user!`
}
// console.log(stepComparison())

const displayUser = () => {
  let name = user1.returnUserFirstName()
 userName.innerText = user1.name
 userAddress.innerText = user1.address
 userEmail.innerText = user1.email
 welcomeBanner.innerText = `Welcome, ${name}!`
 userStepAverage.innerText = stepComparison()

  return
}

window.addEventListener('load', displayUser)
