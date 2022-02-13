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
    const findOuncesDrank = this.hydrationData.find(generalHydroData => generalHydroData.userID === userID && generalHydroData.date === date);
    return findOuncesDrank.numOunces;
  }

  drinkSevenDaysData(id) {
    const targetID = this.hydrationData.filter(generalHydroData => generalHydroData.userID === id);
    const targetIndex = targetID.length - 7;
    const returnSevenDays = targetID.slice(targetIndex, 8);
    const separateOunces = returnSevenDays.map(data => data.numOunces);
    return separateOunces;
  }
}

export default Hydration;
