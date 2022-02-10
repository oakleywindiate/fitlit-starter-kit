// Your fetch requests will live here!

fetch("https://fitlit-api.herokuapp.com/api/v1/users")
  .then(response => response.json())
  .then(data => console.log(data))

fetch("https://fitlit-api.herokuapp.com/api/v1/sleep")
  .then(response => response.json())
  .then(data => console.log(data))

fetch("https://fitlit-api.herokuapp.com/api/v1/activity")
  .then(response => response.json())
  .then(data => console.log(data))

fetch("https://fitlit-api.herokuapp.com/api/v1/hydration")
  .then(response => response.json())
  .then(data => console.log(data))


console.log('I will be a fetch request!')
