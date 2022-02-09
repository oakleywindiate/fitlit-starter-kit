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



let userRepo = new UserRepository(userData)
let user1 = new User(userRepo.identifyUser(1))
console.log(user1)

const displayUser = () => {
 userName.innerText = user1.name
 userAddress.innerText = user1.address
 userEmail.innerText = user1.email
 
  return
}
window.addEventListener('load', displayUser)
