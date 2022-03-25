/*
* EasyHTTP Library
* Library for making HTTP requests
*
* @version 2.0.0
* @author obiwan - mdherwan@gmail.com
* @license MIT
*
**/

class EasyHTTP {

    // Http GET Request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json()) // get the json
            .then(data => resolve(data)) // return the json
            .catch(err => reject(err)); // return error if any
        });
    }

    // Http Post Request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => reject(err));
        });
    }

}