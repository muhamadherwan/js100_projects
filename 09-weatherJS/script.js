// init weather object
const weather = new Weather('Kuala Lumpur', 'MY');

// init UI object
const ui = new UI();

// get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);
// weather.changeLocation('London', 'GB');

function getWeather(){
    weather.getWeather()
        .then(results => {
            // console.log(results)
            ui.paint(results);
        })
        .catch(err => console.log(err));
}
