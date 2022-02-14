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

  drinkDailyAmount(id) {
    const filterOneUser = this.hydrationData.filter(data => data.userID === id);
    const findIndex = filterOneUser.length - 1;
    const findOuncesDrank = filterOneUser[findIndex].numOunces;
    return findOuncesDrank;
  }

  drinkSevenDaysData(id) {
    const targetID = this.hydrationData.filter(generalHydroData => generalHydroData.userID === id);
    const targetIndex = targetID.length - 7;
    console.log(targetIndex)
    const returnSevenDays = targetID.slice(targetIndex, 8);
    console.log(returnSevenDays)
    const separateOunces = returnSevenDays.map(data => data.numOunces);
    console.log(separateOunces)
    return separateOunces;
  }
}

export default Hydration;
