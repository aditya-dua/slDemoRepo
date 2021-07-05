let request = require('request')

let apiKey='<API-KEY>';

const CITIES=['Kolkata','Banglore','Delhi'];

const city = CITIES[Math.floor(Math.random()*CITIES.length)];

let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

request(url,function(err,response,body){
    console.log('URL : '+url);

    console.log('Fetching the weather data for city : '+city);

    if(err){
        console.log('Theres an error getting weather data.')
    }else{
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} degress in ${weather.name}! `;
        console.log(message);
    }
    greet();
});
//JSON.parse(body) & JSON.stringify

function greet(){
    console.log('Weather data is fecthed!');
}
