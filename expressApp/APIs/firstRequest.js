// const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });


const request = require('request');
const apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=7ab722e83b28fe8a0a253eacac787aef'

request(apiCall, (error, response, body) => {
    if (error){
        console.log('!!! ERROR !!!')
        console.log(error);
    } else{
        console.log('*** SUCCESS ***')
        console.log(`statusCode: ${response.statusCode}`);
        let bodyObj = JSON.parse(body);
        console.log('Unix/Epoch Timestamp:');
        console.log(bodyObj.sys.sunset);
        let myDate = new Date(bodyObj.sys.sunset*1000);
        console.log(myDate);
    }
});
