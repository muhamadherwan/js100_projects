class Github {
    constructor() {
        this.client_id = '38f224220e3070bef8c9';
        this.client_secret = 'ae425f46f234944d98087b33efd19f518b98b1e3';

        this.repost_count = 5;
        this.client_sort = 'desc';
    }

    // get user and repost request
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repost_count}&sort=${this.repost_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repos = await repoResponse.json();

        return { profile, repos };
    }

}