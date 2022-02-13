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

  sleepQualityAverage() {

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
