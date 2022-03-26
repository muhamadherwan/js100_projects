class Github {
    constructor() {
        this.client_id = '38f224220e3070bef8c9';
        this.client_secret = 'ae425f46f234944d98087b33efd19f518b98b1e3';
    }

    // get user request
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return { profile };
    }

}