function easyHTTP() {
    // inital xhr object
    this.http = new XMLHttpRequest();
}

// Make HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
    // request the json data
    this.http.open('GET', url, true);

    // self to acces the this properties (es5)
    let self = this;

    // load the json data
    this.http.onload = function(){
        // check if json data is loaded
        if (self.http.status === 200) {
            // return the json
            callback(null, self.http.responseText);
        } else {
            callback('error: ' + self.http.status);
        }
    }
        
    // send the request
    this.http.send();
}

// Make HTTP POST Request 

// Make HTTP PUT Request

// Make HTTP DELETE Request