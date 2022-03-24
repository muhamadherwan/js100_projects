const http = new easyHTTP;

// get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });


// get single post by post id
// http.get('https://jsonplaceholder.typicode.com/posts/2', function(err, posts) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });

// create new data
const data =  {
    title: 'Custom Post puspus fafa',
    body: 'this is a custom post wuswus' 
};

// // create new post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// edit post
// http.put('https://jsonplaceholder.typicode.com/posts/2', data, function(err, post){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

