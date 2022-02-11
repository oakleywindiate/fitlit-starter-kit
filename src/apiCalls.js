// Your fetch requests will live here!
import UserRepository from './UserRepository';

const userData = fetch("https://fitlit-api.herokuapp.com/api/v1/users");
const sleepData = fetch("https://fitlit-api.herokuapp.com/api/v1/sleep");
const activityData = fetch("https://fitlit-api.herokuapp.com/api/v1/activity");
const hydrationData = fetch("https://fitlit-api.herokuapp.com/api/v1/hydration");
  // console.log(userData)
  // .then(response => response.json())
  // .then(data => console.log(data))
Promise.all([userData, sleepData, activityData, hydrationData])

.then(data => {
  data.forEach(response => {
    process(response.json());
  })
})

const process = (prom => {
  const result = prom.then(data => {
    // console.log(data)
    sendData(data);
    return data;
  })
  // console.log(result);

})
process();

function sendData(para) {
  let userRepo = new UserRepository(para.userData)
  console.log(userRepo)
  // return userRepo
}









// fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
//   .then(response => response.json())
//   .then(data => console.log(data))
//
// fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
//   .then(response => response.json())
//   .then(data => console.log(data))
//
// fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
//   .then(response => response.json())
//   .then(data => console.log(data))



console.log('I will be a fetch request!')

// export default data;
