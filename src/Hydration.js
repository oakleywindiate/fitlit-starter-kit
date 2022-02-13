class Hydration {
  constructor(generalHydroData) {
    this.hydrationData = generalHydroData;

    // console.log(generalHydroData)
    // this.userID = hydro.userID;
    // this.date = hydro.date;
    // this.numOunces = hydro.numOunces;
    // this.hydrationData = [];
    // console.log(hydro)
  }

  // identifyUser(id) {
  //   const filteredHydroData = this.hydrationData.filter((data) => data.userID === id)
    // return hydro.find((user) => user.id === id)
  // }

  drinkDailyAverage(id){
    const filteredHydroData = this.hydrationData.filter((data) => data.userID === id)
    const mappedData = filteredHydroData.map(data => data.numOunces)
    const ounces = (previousValue, currentValue) => previousValue + currentValue;
    console.log(mappedData)
    return ((mappedData.reduce(ounces)) / mappedData.length);

  }

  drinkDailyAmount(date) {

  }

  drinkSevenDaysData() {

  }
}


export default Hydration;
