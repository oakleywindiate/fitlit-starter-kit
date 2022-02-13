class Sleep {
  constructor(generalSleepData) {
    this.sleepData = generalSleepData;
  }

  sleepDailyAverage(id) {
    const filteredSleepData = this.sleepData.filter(data => data.userID === id);
    const mappedData = filteredSleepData.map(data => data.hoursSlept);
    const hours = (previousValue, currentValue) => previousValue + currentValue;
    return ((mappedData.reduce(hours)) / mappedData.length);
  }

  sleepQualityAverage(id) {
    const filteredQualityData = this.sleepData.filter(data => data.userID === id);
    const mappedData2 = filteredQualityData.map(data => data.sleepQuality);
    const quality = (previousValue, currentValue) => previousValue + currentValue;
    return ((mappedData2.reduce(quality)) / mappedData2.length);
  }

  sleepDailyAmount() {

  }

  sleepDailyQuality() {

  }

  sleepSevenDTotal() {

  }

  sleepSevenDQuality() {

  }

  sleepSevenDQualityAve() {

  }
}

export default Sleep;
