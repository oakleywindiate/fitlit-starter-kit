class Hydration {
  constructor(generalHydroData) {
    this.hydrationData = generalHydroData;
  }

  calculateDailyDrinkAvg(id) {
    const filteredHydroData = this.hydrationData.filter(data => data.userID === id);
    const mappedData = filteredHydroData.map(data => data.numOunces);
    const ounces = (previousValue, currentValue) => previousValue + currentValue;
    return ((mappedData.reduce(ounces)) / mappedData.length);
  }

  showDailyDrinkAmount(id) {
    const filterOneUser = this.hydrationData.filter(data => data.userID === id);
    const findIndex = filterOneUser.length - 1;
    const findOuncesDrank = filterOneUser[findIndex].numOunces;
    return findOuncesDrank;
  }

  show7DaysDrinkAmount(id) {
    const targetID = this.hydrationData.filter(generalHydroData => generalHydroData.userID === id);
    const targetIndex = targetID.length - 7;
    const returnSevenDays = targetID.slice(targetIndex);
    const separateOunces = returnSevenDays.map(data => data.numOunces);
    return separateOunces;
  }
}

export default Hydration;
