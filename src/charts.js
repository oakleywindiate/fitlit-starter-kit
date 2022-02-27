import Hydration from './Hydration';
import UserRepository from './UserRepository';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
export {hydrationChart, stepChart, sleepChart, foodChart}

const hydrationChart = (ctx, h2oAvg, h2oToday) =>    {
  const myChart1 = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: [`Ounces Today`, 'Weekly Average' ],
          datasets: [{
              label: 'Hydration oz',
              data: [h2oAvg, h2oToday],
              backgroundColor: [
                  '#1e7898',
                  '#FFF',
              ],
          }]
      },
      options: {
          cutout: 100,
          borderWidth: 1,
          borderColor: '#000000',
          hoverOffset: 0,
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              font: {
                size: 20
              },
              text: "Hydration",
              color: "#000000",
            }
          }
      }
  });
}

const stepChart = (ctx2, data) => {
  const myChart2 = new Chart(ctx2, {
      type: 'doughnut',
      data: {
          labels: ['Number Steps', 'Minutes Active', ],
          datasets: [{
              label: ['Number Steps', 'Minutes Active', ],
              data: [data.activityData[0].numSteps, data.activityData[0].minutesActive, ],
              backgroundColor: [
                  '#FFD6BA',
                  '#FFF',
              ],
          }]
      },
      options: {
          cutout: 100,
          borderWidth: 1,
          borderColor: '#000000',
          hoverOffset: 0,
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              font: {
                size: 20
              },
              text: "Activity",
              color: "#000000",
            }
          }
      }
  });
}

const sleepChart = (ctx3, dailySleep, sleepQuality) => {
  const myChart3 = new Chart(ctx3, {
      type: 'doughnut',
      data: {
          labels: ['Sleep Hours', 'Sleep Quality'],
          datasets: [{
              label: 'Sleep',
              data: [dailySleep, sleepQuality],
              backgroundColor: [
                  '#145369',
                  '#FFF',
              ],
          }]
      },
      options: {
          cutout: 100,
          borderWidth: 1,
          borderColor: '#000000',
          hoverOffset: 0,
          plugins: {
            legend: {
              display: false
            },
            title: {
              display: true,
              font: {
                size: 20
              },
              text: "Sleep",
              color: "#000000",
            }
          }
        }
  });
}

const foodChart = (ctx4, data) => {
  const myChart4 = new Chart(ctx4, {
      type: 'doughnut',
      data: {
          labels: ['Daily Calories', 'Calorie Goal'],
          datasets: [{
              label: ['Calories', 'Calorie Goal'],
              data: [ 1200, 3300 ],
              backgroundColor: [
                  '#BEE3DB',
                  '#FFF',
              ],
          }]
      },
      options: {
          cutout: 100,
          borderWidth: 1,
          borderColor: '#000000',
          hoverOffset: 0,
          plugins: {
          legend: {
            display: false
          },
          title: {
            display: true,
            font: {
              size: 20
            },
              text: "Calories",
              color: "#000000",
            }
          }
      }
  });
}

export default Chart;
