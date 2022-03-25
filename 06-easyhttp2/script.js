// create new EasyHTTP object;
const http = new EasyHTTP();

// Get Users
// http.get('http://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// new user data
const data = {
    name: 'Chino',
    username: 'deftones',
    email: 'chino@deftones.com'
}

// Post new user
// http.post('http://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Edit a user
// http.put('http://jsonplaceholder.typicode.com/users/1',data)
// .then(data => console.log(data))
// .catch(err => console.log(err));
