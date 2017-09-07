
'use strict';


let request = require('request');

let apiKey = 'b1b15e88fa797225412429c1c50c122a1';
let city = 'London,uk';
let url = 'http://samples.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}'

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } else {
    console.log('body:', body);
  }
});






//http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b1b15e88fa797225412429c1c50c122a1
