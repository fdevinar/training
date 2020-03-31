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
        // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        labels: [
            'Mar. 30', 'Mar. 29', 'Mar. 28', 'Mar. 27', 'Mar. 26',
            'Mar. 25', 'Mar. 24', 'Mar. 23', 'Mar. 22', 'Mar. 21',
            'Mar. 20', 'Mar. 19', 'Mar. 18', 'Mar. 17', 'Mar. 16',
            'Mar. 15', 'Mar. 14', 'Mar. 13', 'Mar. 12', 'Mar. 11',
            'Mar. 10', 'Mar. 9',  'Mar. 8',  'Mar. 7',  'Mar. 6',
            'Mar. 5',  'Mar. 4',  'Mar. 3',  'Mar. 2',  'Mar. 1',
            'Feb. 29', 'Feb. 28', 'Feb. 27', 'Feb. 26', 'Feb. 25',
            'Feb. 24', 'Feb. 23', 'Feb. 22', 'Feb. 21', 'Feb. 20',
            'Feb. 19', 'Feb. 18', 'Feb. 17', 'Feb. 16', 'Feb. 15',
            'Feb. 14', 'Feb. 13', 'Feb. 12', 'Feb. 11', 'Feb. 10',
            'Feb. 9',  'Feb. 8',  'Feb. 7',  'Feb. 6',  'Feb. 5',
            'Feb. 4',  'Feb. 3',  'Feb. 2',  'Feb. 1',  'Jan. 31',
            'Jan. 30', 'Jan. 29', 'Jan. 28', 'Jan. 27', 'Jan. 26',
            'Jan. 25', 'Jan. 24', 'Jan. 23'
          ],
        datasets: [{
            label: 'Covid-19 Death Count',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            // data: [10, 30, 60, 120, 400, 950, 3230]
            data: [
                '37788', '34065', '30861', '27343', '24073',
                '21282', '18894', '16513', '14640', '13011',
                '11386', '10030', '8951',  '7979',  '7162',
                '6520',  '5833',  '5428',  '4981',  '4628',
                '4296',  '4025',  '3827',  '3599',  '3494',
                '3387',  '3285',  '3202',  '3117',  '3050',
                '2977',  '2923',  '2858',  '2800',  '2763',
                '2699',  '2618',  '2460',  '2360',  '2247',
                '2126',  '2009',  '1873',  '1775',  '1669',
                '1526',  '1383',  '1261',  '1115',  '1018',
                '910', '813','724',    '638',    '565',
                '492', '426','362',    '304',    '259',
                '213', '170','132',    '106',    '80',
                '56', '41', '25'
              ]
        }]
    },

    // Configuration options go here
    options: {}
});

