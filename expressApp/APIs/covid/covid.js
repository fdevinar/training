
const url = 'https://corona-api.com/countries/BR';

console.log(url);

let h2 = document.getElementById('deathCount');

fetch(url) // Call the fetch function passing the url of the API as a parameter
.then((data) => data.json()) // converts data to JSON
.then(function(data) {
    // Your code for handling the data you get from the API
    handleUpdatedData(data);
})
.catch(function(err) {
    // This is where you run code if the server returns any errors
    h2.textContent = 'Failed to Fetch API Data!';
    console.log(`Error: ${err}`);
});

//- NEW
function handleUpdatedData(data){
    let timeline = data.data.timeline;
    console.log(timeline);
    let day = [];
    let deaths = [];
    // POPULATES DAY AND DEATHS ARRAY
    timeline.forEach(function(row){
        day.push(row.date);
        deaths.push(row.deaths);
    });
    // REVERTS DAY TO ENSURE CHRONOLOGICAL ORDER
    day.reverse();
    // REVERTS DEATHS TO MATCH DAYS ON CHRONOLOGICAL ORDER
    deaths.reverse();
    // CREATES CHART
    var ctx = document.getElementById('covidChart').getContext('2d');
    var chart = new Chart(ctx, {
    // types: line, bar, radar, doughnut, pie, polarArea, bubble, scatter
    type: 'bar',
    // The data for our dataset
    data: {
        // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        labels: day,
        datasets: [{
            label: 'Covid 19 Death Count',
            backgroundColor: 'grey',
            borderColor: 'black',
            // data: [0, 10, 5, 2, 20, 30, 45]
            data: deaths
        }]
    },
    // Configuration options go here
    options: {}
    });
}


//- END NEW


function handleData(data){
    // DRILL DOWN TO RELEVANT DATA
    let table = data.deaths.table;
    let day = [];
    let deaths = [];
    // POPULATES DAY AND DEATHS ARRAY
    table.forEach(function(rowData){
        day.push(rowData.Date);
        deaths.push(rowData.TotalDeaths.split(',').join('')); // Split and Join to eliminate ',' from numbers
    });
    // REVERTS DAY TO ENSURE CHRONOLOGICAL ORDER
    day.reverse();
    // GETS DEATH COUNT AND DISPLAYS ON H2
    let deathCount = deaths[0];
    h2.textContent = h2.textContent + ' ' + deathCount;
    // REVERTS DEATHS TO MATCH DAYS ON CHRONOLOGICAL ORDER
    deaths.reverse();
    // CREATES CHART
    var ctx = document.getElementById('covidChart').getContext('2d');
    var chart = new Chart(ctx, {
    // types: line, bar, radar, doughnut, pie, polarArea, bubble, scatter
    type: 'bar',
    // The data for our dataset
    data: {
        // labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        labels: day,
        datasets: [{
            label: 'Covid 19 Death Count',
            backgroundColor: 'grey',
            borderColor: 'black',
            // data: [0, 10, 5, 2, 20, 30, 45]
            data: deaths
        }]
    },
    // Configuration options go here
    options: {}
    });

};


