// create new EasyHTTP object;
const http = new EasyHTTP();

// Get Users
http.get('http://jsonplaceholder.typicode.com/users')
.then(data => console.log(data))
.catch(err => console.log(err));