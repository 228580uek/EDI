// Vertical bar chart
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Population (mln)', 'Birth rate (thsd)', 'Death rate (thsd)', 'Average age', 'Average annual income (thsnd)'],
        datasets: [{
            label: 'Date of information:18/03/2022',
            data: [65.549391, 173.404, 137.877, 31, 191.73392],
            backgroundColor: [
                'rgba(216, 27, 96, 0.6)',
                'rgba(3, 169, 244, 0.6)',
                'rgba(255, 152, 0, 0.6)',
                'rgba(29, 233, 182, 0.6)',
                'rgba(156, 39, 176, 0.6)',
                'rgba(84, 110, 122, 0.6)'
            ],
            borderColor: [
                'rgba(216, 27, 96, 1)',
                'rgba(3, 169, 244, 1)',
                'rgba(255, 152, 0, 1)',
                'rgba(29, 233, 182, 1)',
                'rgba(156, 39, 176, 1)',
                'rgba(84, 110, 122, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
            display: true,
            text: 'Country - Australia',
            position: 'top',
            fontSize: 16,
            padding: 20
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0
                }
            }]
        }
    }
});
// // Doughnut chart
// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         labels: ['Population', 'Birth rate', 'Death rate', 'Average age', 'Average annual income'],
//         datasets: [{
//             data: [65549391, 173404, 137877, 31, 191733,92],
//             backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
//             borderWidth: 0.5 ,
//             borderColor: '#ddd'
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             text: 'Recommended Daily Diet',
//             position: 'top',
//             fontSize: 16,
//             fontColor: '#111',
//             padding: 20
//         },
//         legend: {
//             display: true,
//             position: 'bottom',
//             labels: {
//                 boxWidth: 20,
//                 fontColor: '#111',
//                 padding: 15
//             }
//         },
//         tooltips: {
//             enabled: false
//         },
//         plugins: {
//             datalabels: {
//                 color: '#111',
//                 textAlign: 'center',
//                 font: {
//                     lineHeight: 1.6
//                 },
//                 formatter: function(value, ctx) {
//                     return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
//                 }
//             }
//         }
//     }
// });

// // Doughnut chart
// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: 'doughnut',
//     data: {
//         labels: ['Popular male name', 'Popular female name', 'Preffered job title'],
//         datasets: [{
//             data: ['Bradley', 'Hedi', 'Legal Assistant'],
//             backgroundColor: ['#e91e63', '#00e676', '#ff5722', '#1e88e5', '#ffd600'],
//             borderWidth: 0.5 ,
//             borderColor: '#ddd'
//         }]
//     },
//     options: {
//         title: {
//             display: true,
//             text: 'Recommended Daily Diet',
//             position: 'top',
//             fontSize: 16,
//             fontColor: '#111',
//             padding: 20
//         },
//         legend: {
//             display: true,
//             position: 'bottom',
//             labels: {
//                 boxWidth: 20,
//                 fontColor: '#111',
//                 padding: 15
//             }
//         },
//         tooltips: {
//             enabled: false
//         },
//         plugins: {
//             datalabels: {
//                 color: '#111',
//                 textAlign: 'center',
//                 font: {
//                     lineHeight: 1.6
//                 },
//                 formatter: function(value, ctx) {
//                     return ctx.chart.data.labels[ctx.dataIndex] + '\n' + value + '%';
//                 }
//             }
//         }
//     }
// });
