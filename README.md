# Fitlit: Health Yeah!

## Overview

Are you looking for a fast and simple way to keep your health goals all in one place? Well look no further! The Fitlit: Health Yeah! activity tracker is here to be your personal assistant for all things health related.

Easily track your activity for the day and compare your step goals with our community to keep your motivation up. Update your water intake with just a few clicks-- staying hydrated has never been easier! You can even track your sleep to ensure you're getting the quality rest you need.


## Project Motivation

The Fitlit project teaches developers how to work within a team as well as how to create interactive and functional web pages using JavaScript, CSS, and HTML.

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
1. To run this project, fork and clone it to your local device [here](https://github.com/oakleywindiate/fitlit-starter-kit)
2. Install the appropriate technologies (Mocha/Chai)
3. `cd` into project
4. Run `npm install` to install project dependencies
5. Run `npm start` in the terminal
6. To view your webpage, use the local host address provided
7. Next, clone the API's [here](https://github.com/turingschool-examples/fitlit-api)
8. `cd` into project
9. Run `npm install` to install project dependencies
10. Run `npm start` in the terminal
11. To stop the local server from running in your terminal use `command` + `c`

### Features

* Display User Profile
* Display Activity, Sleep and Hydration data for user1
* Display average Activity, Sleep and Hydration data for all users.

![charts](https://user-images.githubusercontent.com/92649050/156062981-180db8ac-9e70-4363-ab1f-c01425cbee36.gif)

* Log Water Intake
* Log Activity
* Log Sleep

![form-entry](https://user-images.githubusercontent.com/92649050/156063285-361127f5-eb55-4388-a10a-f4064b4d110b.gif)

* Posted Logs Will Update the Local API

![Screen Shot 2022-02-28 at 3 16 03 PM](https://user-images.githubusercontent.com/92649050/156063997-1717cfdd-653d-43cb-a246-03fb4377ea5e.png)

* Error Handling to Ensure All Needed Data is Collected Before Post is Sent

![form-error](https://user-images.githubusercontent.com/92649050/156063992-923a547a-94c0-4faf-98f1-69cf7b725648.gif)

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
* View and Filter All Logs for a Given user
* View a list of Friends and Compare Goals and Successes
* Make Display More User Friendly and Available for Use on Mobile Devices

### Development Team

* [Jerry Vohrer](https://github.com/Jerry-Vrrr)
* [Igor Decess](https://github.com/userigorgithub)
* [Oakley Windiate](https://github.com/oakleywindiate)

### Credits

This project was created by Turing School of Software and Design, a Colorado Non-Profit Organization.

A link to the original repository can be found by clicking [here](https://github.com/turingschool-examples/fitlit-starter-kit)

Interested in learning more about Turing? [click here](https://turing.edu/)
