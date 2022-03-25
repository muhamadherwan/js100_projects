/*
* EasyHTTP Library
* Library for making HTTP requests
*
* @version 3.0.0
* @author obiwan - mdherwan@gmail.com
* @license MIT
*
**/

class EasyHTTP {

    // Http GET Request
    async get(url) {
        const response = await fetch(url);
        const resData = await response.json();
        return resData;
    }

    // Http Post Request
    async post(url, data) {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const resData = await response.json();
        return resData;
    }

    // Http Put Request
    async put(url, data) {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;
    }

    // Http Delete Request
    delete(url) {
        return new Promise((resolve, reject) =>{
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then(res => res.json())
            .then(() => resolve('Data deleted!'))
            .catch(err => reject(err));
        });
    }

}