# FitLit Activity Tracker

## Overview

Are you looking for a simple way to keep all your health and exercise goals in one easy-to-use place? Well look no further! The FitLit Activity Tracker is here to be your personal assistant for all things health related.

The FitLit Activity Tracker is a fast and easy way to see your steps for the day. You can even compare your steps with others to keep your motivation up.

But wait, there's more! You can update and display your water intake with just a few clicks. Staying hydrated has never been easier! Did we mention that you can also keep track of your food for the day, too? The FitLit Activity Tracker can do it all.


## Project Motivation

The fitlit project is a kinesthetic learning activity that teaches developers how to work with a team as well as how to create interactive and functional web pages using JavaScript, CSS, and HTML.

***
## Project Information

#### Technologies Used
* JavaScript
* Mocha
* Chai
* HTML
* CSS
* Webpack
* Chart.js

### Installation
1. To run this project, fork and clone it to your local device
2. Install the appropriate technologies (Mocha/Chai)
3. `cd` into project
4. Run `npm install` to install project dependencies
5. Run `npm start` in the terminal
6. To view your webpage, use the local host address provided

### Features
* Display User Profile
* Display User Friends
* Compare Step Goals
* Daily and Weekly Water Intake
* Activity Tracker

### Code Sample
The following is one example of code that played an integral role in our webpage:
```javascript
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
```
***

### Future Additions


### Development Team

* [Jerry Vohrer](https://github.com/Jerry-Vrrr)
* [Igor Decess](https://github.com/userigorgithub)
* [Oakley Windiate](https://github.com/oakleywindiate)

### Credits

This project was created by Turing School of Software and Design, a Colorado Non-Profit Organization.

A link to the original repository can be found by clicking [here](https://github.com/turingschool-examples/fitlit-starter-kit)

Interested in learning more about Turing? [click here](https://turing.edu/)
