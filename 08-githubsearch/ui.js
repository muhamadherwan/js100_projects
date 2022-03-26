class UI {
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                <img src="${user.avatar_url}" alt="" class="img-fluid mb-2" />
                <a
                    href="${user.html_url}"
                    target="_blank"
                    class="btn btn-primary btn-block mb-4"
                >
                    View Profile
                </a>
                </div>
                <div class="col-md-9">
                <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge bg-success">Follower: ${user.followers}</span>
                <span class="badge bg-info">Following: ${user.following}</span>
                <br />
                <br />
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website: ${user.website}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
                </div>
            </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;
    }

    showRepos(repos){
        let output = '';

        repos.forEach((repo) => {
            output += `
            <div class="card card-body mb-2">
            <div class="row">
                <div class="col-md-6">
                <a href="${repo.html_url}" target="_blank">
                    ${repo.name}
                </a>
                </div>
                <div class="col-md-6">
                <span class="badge bg-primary">Stars: ${repo.stargazer_count}</span>
                <span class="badge bg-secondary">Watcher: ${repo.watcher_count}</span>
                <span class="badge bg-success">Fork: ${repo.forms_count}</span>
                </div>
            </div>
            </div>
            `;
        });

        // output repos 
        document.getElementById('repos').innerHTML = output;
    }

    clearProfile() {
        this.profile.innerHTML = '';
    }

    clearAlert(){
        const currentAlert = document.querySelector('.alert');

        if (currentAlert) {
            currentAlert.remove();
        }
    }
    showAlert(message, className) {
        // clear any remaining alert
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        // add class
        div.className = className;
        // add text
        div.appendChild(document.createTextNode(message));
        // get parent
        const container = document.querySelector('.searchContainer');
        // get search box
        const search = document.querySelector('.search');
        // insert alert
        container.insertBefore(div, search);
        // time out after 3 sec
        setTimeout( () => this.clearAlert(), 3000);
    }


}