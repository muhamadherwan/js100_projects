// init Gitub
github = new Github();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;

    if (userText !== ''){
        // make http call
        github.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    // show alert
                    console.log('not found');
                } else {
                    // show profile
                    console.log(data.profile);
                }
            })
    } else {
        // clear profile
        console.log('clear');
    }
});
