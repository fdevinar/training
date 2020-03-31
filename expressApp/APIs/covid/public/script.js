let ctx = document.getElementById('myChart').getContext('2d');
let dataDate = document.getElementById('dataDate');
let dataDeaths = document.getElementById('dataDeaths');

console.log(dataDate);
// console.log(dataDeaths);

let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'Covid-19 Death Count',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: [10, 30, 60, 120, 400, 950, 3230]
        }]
    },

    // Configuration options go here
    options: {}
});

