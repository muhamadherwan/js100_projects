class Weather {
    constructor(city, country){
        this.apiKey = '4fefd60b19b9585896debd521cbaecc1';
        this.city = city;
        this.country = country;
    }

    // fetch weather from api
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apiKey}&units=metric`);

        const responseData = await response.json();

        return responseData;
    }

    // change wether location
    changeLocation(city, country){
        this.city = city;
        this.country = country;
    }
}