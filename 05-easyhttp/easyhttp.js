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
easyHTTP.prototype.post = function(url, data, callback) {
    // request to sent the new post
    this.http.open('POST', url, true);
    // request the header
    this.http.setRequestHeader('Content-type', 'application/json');
    
    let self = this;
    // call back to return the create new post
    this.http.onload = function() {
        if (self.http.status === 201) {
            callback(null, self.http.responseText);
        } else {
            callback('error: ' + self.http.status); 
        }
    }

    // send the new post
    this.http.send(JSON.stringify(data));
}


// Make HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback){
    // request to edit the post
    this.http.open('PUT', url, true);
    // request header
    this.http.setRequestHeader('Content-type', 'application/json');

    // callback to return the edit post result
    let self = this;
    // callback the request result
    this.http.onload = function() {
        if (self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('error: ' + self.http.status);
        }
    }

    
    // edit the post
    this.http.send(JSON.stringify(data));
}


// Make HTTP DELETE Request