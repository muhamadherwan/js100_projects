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
http.get('https://jsonplaceholder.typicode.com/posts/2', function(err, posts) {
    if (err) {
        console.log(err);
    } else {
        console.log(posts);
    }
});

// create new post
