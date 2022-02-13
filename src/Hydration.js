class Hydration {
  constructor(generalHydroData) {
    this.hydrationData = generalHydroData;

  }

  drinkDailyAverage(id) {
    const filteredHydroData = this.hydrationData.filter(data => data.userID === id);
    const mappedData = filteredHydroData.map(data => data.numOunces);
    const ounces = (previousValue, currentValue) => previousValue + currentValue;
    return ((mappedData.reduce(ounces)) / mappedData.length);
  }

  drinkDailyAmount(userID, date) {
    //use find to find specific data?
    //connect id with specific date to display numOunces?
    const findOuncesDrank = this.hydrationData.find(generalHydroData => generalHydroData.userID === userID && generalHydroData.date === date);
    console.log(findOuncesDrank)
    return findOuncesDrank.numOunces;
  }

  drinkSevenDaysData() {

  }
}


export default Hydration;
