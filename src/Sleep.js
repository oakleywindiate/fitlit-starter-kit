class Sleep {
  constructor(generalSleepData) {
    this.sleepData = generalSleepData;
  }

  calculateDailySleepAvg(id) {
    const filteredSleepData = this.sleepData.filter(data => data.userID === id);
    const mappedData = filteredSleepData.map(data => data.hoursSlept);
    const hours = (previousValue, currentValue) => previousValue + currentValue;
    return Math.round((mappedData.reduce(hours)) / mappedData.length);
  }

  calculateDailySlQualityAvg(id) {
    const filteredQualityData = this.sleepData.filter(data => data.userID === id);
    const mappedData2 = filteredQualityData.map(data => data.sleepQuality);
    const quality = (previousValue, currentValue) => previousValue + currentValue;
    return Math.round((mappedData2.reduce(quality)) / mappedData2.length);
  }

  showDailySleepAmount(id) {
    const findHoursSlept = this.sleepData.filter(data => data.userID === id);
    const sleepIndex = findHoursSlept.length - 1;
    const sleep = findHoursSlept[sleepIndex].hoursSlept;
    return sleep;
  }

  showDailySlQuality(id) {
    const findQualityOfSleep = this.sleepData.filter(data => data.userID === id);
    const sleepIndex = findQualityOfSleep.length - 1;
    const sleep = findQualityOfSleep[sleepIndex].sleepQuality;
    return sleep;
  }

  show7DaysSleepAmount(id) {
    const targetID = this.sleepData.filter(generalSleepData => generalSleepData.userID === id);
    const targetIndex = targetID.length - 7;
    const returnSevenDays = targetID.slice(targetIndex);
    const separateHours = returnSevenDays.map(data => data.hoursSlept);
    return separateHours;
  }

  show7DaysSlQuality(id) {
    const targetID2 = this.sleepData.filter(generalSleepData => generalSleepData.userID === id);
    const targetIndex2 = targetID2.length - 7;
    const returnSevenDays2 = targetID2.slice(targetIndex2);
    const separateQuality = returnSevenDays2.map(data => data.sleepQuality);
    return separateQuality;
  }

  calculateSlQualityAvgAll() {
    const mappedDataAll = this.sleepData.map(data => data.sleepQuality);
    const qualityAll = (previousValue, currentValue) => previousValue + currentValue;
    return Math.round((mappedDataAll.reduce(qualityAll)) / mappedDataAll.length);
  }
}

export default Sleep;
