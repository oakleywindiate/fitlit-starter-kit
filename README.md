# FitLit Activity Tracker

## Overview

Are you looking for a fast and simple way to keep your health goals all in one place? Well look no further! The FitLit: Health Yeah! activity tracker is here to be your personal assistant for all things health related.

Easily track your activity for the day and compare your step goals with our community to keep your motivation up. Update your water intake with just a few clicks-- staying hydrated has never been easier! You can even track your sleep to ensure you're getting the quality rest you need. 


## Project Motivation

The FitLit project teaches developers how to work within a team as well as how to create interactive and functional web pages using JavaScript, CSS, and HTML.

***
## Project Information

#### Technologies Used
* JavaScript
* Mocha
* Chai
* HTML
* CSS
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
* Log Water Intake
* Log Activity
* Log Sleep
* Display Step Goals

### Code Sample
The following is one example of code that played an integral role in our webpage:
```javascript
const manageHydroData = (hydroData, user1) => {
  const ctx = document.getElementById('myChart1').getContext('2d');
  let h2oAvg = hydroData.calculateDailyDrinkAvg(user1.id)
  let h2oToday = hydroData.showDailyDrinkAmount(user1.id)
  let h2oSevenDay = hydroData.show7DaysDrinkAmount(user1.id)
  displayHydroTicker(h2oSevenDay)
  hydrationChart(ctx, h2oAvg, h2oToday)
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
