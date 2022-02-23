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
                  '#F5F5DC',
              ],
              borderWidth: 0
          }]
      },
      options: {
          // cutout: 100,
          hoverOffset: 0,
          plugins: {
            title: {
              display: true,
              font: {
                size: 20
              },
              color: "#FFF",
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
                  '#be4d25',
                  '#F5F5DC',
              ],
              borderWidth: 0
          }]
      },
      options: {
          // cutout: 150,
          hoverOffset: 0,
          plugins: {
            title: {
              display: true,
              font: {
                size: 20
              },
              text: "Steps",
              color: "#FFF",
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
                  '#F5F5DC',
              ],
              borderWidth: 0
          }]
      },
      options: {
          // cutout: 150,
          hoverOffset: 0,
          plugins: {
            title: {
              display: true,
              font: {
                size: 20
              },
              text: "Sleep",
              color: "#FFF",
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
                  '#96be25',
                  '#F5F5DC',
              ],
              borderWidth: 0
          }]
      },
      options: {
          // cutout: 100,
          hoverOffset: 0,
          plugins: {
            title: {
              display: true,
              font: {
                size: 20
              },
              text: "Calories",
              color: "#FFF",
            }
          }
      }
  });
}
export default Chart;
