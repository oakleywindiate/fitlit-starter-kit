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

  sleepDailyAmount(id, date) {
    const findHoursSlept = this.sleepData.find(generalSleepData => generalSleepData.userID === id && generalSleepData.date === date);
    return findHoursSlept.hoursSlept;
  }

  sleepDailyQuality(id, date) {
    const findQualityOfSleep = this.sleepData.find(generalSleepData => generalSleepData.userID === id && generalSleepData.date === date);
    return findQualityOfSleep.sleepQuality;
  }

  sleepSevenDaysData(id) {
    const targetID = this.sleepData.filter(generalSleepData => generalSleepData.userID === id);
    const targetIndex = targetID.length - 7;
    const returnSevenDays = targetID.slice(targetIndex, 8);
    const separateHours = returnSevenDays.map(data => data.hoursSlept);
    return separateHours;
  }

  sleepSevenDaysQualityData(id) {
    const targetID2 = this.sleepData.filter(generalSleepData => generalSleepData.userID === id);
    const targetIndex2 = targetID2.length - 7;
    const returnSevenDays2 = targetID2.slice(targetIndex2, 8);
    const separateQuality = returnSevenDays2.map(data => data.sleepQuality);
    return separateQuality;
  }

  sleepQualityAverageAll() {
    const mappedDataAll = this.sleepData.map(data => data.sleepQuality);
    const qualityAll = (previousValue, currentValue) => previousValue + currentValue;
    return Math.round((mappedDataAll.reduce(qualityAll)) / mappedDataAll.length);
  }
}

export default Sleep;
