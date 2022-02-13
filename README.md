# Fitlit Activity Tracker

## Overview

Feeling nostalgic for old games? Then look no further than the classic tic-tac-toe you know and love!

This two player game offers an interactive board complete with your very own character. Play as an alien or a spaceship, and be prepared to fight it out with this classic head-to-head matchup!

## Project Motivation

The fitlit project is a kinesthetic learning activity that teaches developers how to work with a team as well as how to create interactive and functional web pages using JavaScript, CSS, and HTML.

***
## Project Information

#### Code Style & Framework
* JavaScript
* Mocha
* Chai
* HTML
* CSS
* Webpack
* Chart.js

#### Features
* Display User Profile
* Display User Friends
* Compare Step Goals
* Daily and Weekly Water Intake
* Activity Tracker

#### Code Sample
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
### Installation

1. To edit this repo, fork and clone it to your local device
2. Download the appropriate technologies (Mocha/Chai) to access this project
3. `cd` into project
4. Run `npm install` to install project dependencies
5. Run `npm start` in the terminal
6. To view your webpage, use the local host address provided

### Developer Team

* [Jerry Vohrer](https://github.com/Jerry-Vrrr)
* [Igor Decess](https://github.com/userigorgithub)
* [Oakley Windiate](https://github.com/oakleywindiate)

### Credits

This project was created by Turing School of Software and Design, a Colorado Non-Profit Organization.

A link to the original repository can be found by clicking [here](https://github.com/turingschool-examples/fitlit-starter-kit)

Interested in learning more about Turing? [click here](https://turing.edu/)
