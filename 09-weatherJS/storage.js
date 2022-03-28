class Storage{
    constructor() {
        this.city;
        this.country;
        this.defaultCity = 'Kuala Lumpur';
        this.defaultCountry = 'Malaysia';
    }

    getLocationData(){
        if (localStorage.getItem('city') === '') {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        if (localStorage.getItem('country') === '') {
            this.country = this.defaultCountry;
        } else {
            this.country = localStorage.getItem('country');
        }

         return {
            city: this.city,
            country: this.country
        }
    }

    setLocationData(city,country){
        localStorage.setItem('city', city);
        localStorage.setItem('country', country);
    }

}