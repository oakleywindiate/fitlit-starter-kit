export {displayHydroData, displaySleepData, displayUserData};


// const displayUser = (userRepo, user1, h2oSevenDay, sleepSevenDay, sleepQualityWeek, sleepQualityAverage, sleepDailyAverage) => {






const displayHydroData = (h2oSevenDay) => {
  waterWeek.innerText = `Water Consumed Per Day This Week: ${h2oSevenDay}`
}

const displaySleepData = (sleepSevenDay, sleepQualityWeek, sleepQualityAverage, sleepDailyAverage) => {
  sleepWeek.innerText = `Hours Slept Per Day This Week: ${sleepSevenDay}`
  sleepAvg.innerText = `Sleep Quality Per Day This Week: ${sleepQualityWeek}`
  allTimeQuality.innerText = `All Time Average Sleep Quality: ${sleepQualityAverage}`
  allTimeHours.innerText = `All Time Average Sleep Hours: ${sleepDailyAverage}`
}

const displayUserData = (userRepo, user1) => {
  let name = user1.returnUserFirstName()
  welcomeBanner.innerText = `Welcome, ${name}!`
  userName.innerText = user1.name
  userAddress.innerText = user1.address
  userEmail.innerText = user1.email
  userStepAverage.innerText = user1.stepComparison(userRepo, user1)
}
