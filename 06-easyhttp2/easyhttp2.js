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

}