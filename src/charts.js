
const ctx = document.getElementById('myChart').getContext('2d');
const ctx2 = document.getElementById('myChart2').getContext('2d');
const ctx3 = document.getElementById('myChart3').getContext('2d');
const ctx4 = document.getElementById('myChart4').getContext('2d');

// import Chart from './chart.js/auto';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Hydration ml', ''],
        datasets: [{
            label: 'Hydration ml',
            data: [1400, 1000 ],
            backgroundColor: [
                '#1e7898',
                '#F5F5DC',
            ],
            borderWidth: 0
        }]
    },
    options: {
        cutout: 80,
        hoverOffset: 4,
    }
});

const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Step Average', ''],
        datasets: [{
            label: 'Step Average',
            data: [6700,3300],
            backgroundColor: [
                '#be4d25',
                '#F5F5DC',
            ],
            borderWidth: 0
        }]
    },
    options: {
        cutout: 80,
        hoverOffset: 4,
    }
});

const myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Sleep', ''],
        datasets: [{
            label: 'Sleep',
            data: [8, 2 ],
            backgroundColor: [
                '#145369',
                '#F5F5DC',
            ],
            borderWidth: 0
        }]
    },
    options: {
        cutout: 80,
        hoverOffset: 4,
    }
});

const myChart4 = new Chart(ctx4, {
    type: 'doughnut',
    data: {
        labels: ['Food', ''],
        datasets: [{
            label: 'Food',
            data: [6700,3300 ],
            backgroundColor: [
                '#96be25',
                '#F5F5DC',
            ],
            borderWidth: 0
        }]
    },
    options: {
        cutout: 80,
        hoverOffset: 4,
    }
});
