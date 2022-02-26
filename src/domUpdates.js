export {displayHydroData, displaySleepData, displayUserData, displaySleepTicker, displayHydroTicker, displayActivityTicker};

// --------- QUERY SELECTORS/VARIABLES ---------

const userName = document.querySelector('#userName')
const userAddress = document.querySelector('#userAddress')
const userEmail = document.querySelector('#userEmail')
const welcomeBanner = document.querySelector('#welcomeBanner')
const userStepAverage = document.querySelector('#userStepAverage')
const sleepWeek = document.querySelector('#sleepWeek')
const sleepAvg = document.querySelector('#sleepAvg')
// const allTimeHours = document.querySelector('#allTimeHours')
// const allTimeQuality = document.querySelector('#allTimeQuality')
// const waterWeek = document.querySelector('#waterWeek')
const ticker = document.querySelector('#ticker')
  // , list = document.querySelector('#ticker-list')
const ticker1 = document.querySelector('#tickerItem1')
const ticker2 = document.querySelector('#tickerItem2')
const ticker3 = document.querySelector('#tickerItem3')
const ticker4 = document.querySelector('#tickerItem4')
const ticker5 = document.querySelector('#tickerItem5')
const ticker6 = document.querySelector('#tickerItem6')

// --------- FUNCTIONS ---------

const displayHydroData = (h2oSevenDay) => {
  waterWeek.innerText = `Water Consumed Per Day This Week: ${h2oSevenDay}`
}

const displaySleepData = (sleepSevenDay, sleepQualityWeek, sleepQualityAverage, sleepDailyAverage) => {
  sleepWeek.innerText = `Hours Slept Per Day This Week: ${sleepSevenDay}`
  sleepAvg.innerText = `Sleep Quality Per Day This Week: ${sleepQualityWeek}`
  // allTimeQuality.innerText = `All Time Average Sleep Quality: ${sleepQualityAverage}`
  // allTimeHours.innerText = `All Time Average Sleep Hours: ${sleepDailyAverage}`
}

const displayUserData = (userRepo, user1) => {
  let name = user1.returnUserFirstName()
  welcomeBanner.innerText = `Welcome, ${name}!`
  userName.innerText = user1.name
  userAddress.innerText = user1.address
  userEmail.innerText = user1.email
  userStepAverage.innerText = user1.stepComparison(userRepo, user1)
}

const displaySleepTicker = (sleepSevenDay, sleepQualityWeek) => {
  ticker1.innerText = `7 day sleep hours by day = ${sleepSevenDay}`
  ticker2.innerText = `7 day sleep hours by day = ${sleepQualityWeek}`
  ticker5.innerText = 'karate'
  ticker6.innerText = ''
}

const displayHydroTicker = (h2oSevenDay) => {
  ticker3.innerText = `Ounces of water drank past 7 days = ${h2oSevenDay}`
}

const displayActivityTicker = (dailyMiles, avgUserSteps, avgUserMinActive, avgUserStairsClimbed) => {
ticker4.innerText = `You walked ${dailyMiles} miles today!`
ticker5.innerText = `The average user took ${avgUserSteps} steps, climbed ${avgUserStairsClimbed} flights and was active for ${avgUserMinActive} mins today.`
ticker6.innerText = ''
}
