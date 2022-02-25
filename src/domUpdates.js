export {displayHydroData, displaySleepData, displayUserData, displayTickerItems};

// --------- QUERY SELECTORS/VARIABLES ---------

const userName = document.querySelector('#userName')
const userAddress = document.querySelector('#userAddress')
const userEmail = document.querySelector('#userEmail')
const welcomeBanner = document.querySelector('#welcomeBanner')
const userStepAverage = document.querySelector('#userStepAverage')
const sleepWeek = document.querySelector('#sleepWeek')
const sleepAvg = document.querySelector('#sleepAvg')
const allTimeHours = document.querySelector('#allTimeHours')
const allTimeQuality = document.querySelector('#allTimeQuality')
const waterWeek = document.querySelector('#waterWeek')
const ticker = document.querySelector('.ticker')
  , list = document.querySelector('.ticker-list')
const ticker1 = document.querySelector('#ticker-item1')
const ticker2 = document.querySelector('#ticker-item1')
const ticker3 = document.querySelector('#ticker-item1')
const ticker4 = document.querySelector('#ticker-item1')
const ticker5 = document.querySelector('#ticker-item1')
const ticker6 = document.querySelector('#ticker-item1')

// --------- FUNCTIONS ---------

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

const displayTickerItems = () => {
  ticker1.innerText = ''
  ticker2.innerText = ''
  ticker3.innerText = ''
  ticker4.innerText = ''
  ticker5.innerText = ''
  ticker6.innerText = ''
}
