// --------- IMPORTS ---------

import Hydration from './Hydration';
import UserRepository from './UserRepository';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

// --------- FUNCTIONS ---------

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
          cutout: 70,
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

const activityChart = (ctx2, data, id) => {
  const myChart2 = new Chart(ctx2, {
      type: 'doughnut',
      data: {
          labels: ['Number Steps', 'Minutes Active', ],
          datasets: [{
              label: ['Number Steps', 'Minutes Active', ],
              data: [data.activityData[id].numSteps, data.activityData[id].minutesActive, ],
              backgroundColor: [
                  '#eb6f6c',
                  '#FFF',
              ],
          }]
      },
      options: {
          cutout: 70,
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
                  '#edc242',
                  '#FFF',
              ],
          }]
      },
      options: {
          cutout: 70,
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

// --------- EXPORTS ---------

export default Chart;
export {hydrationChart, activityChart, sleepChart}
