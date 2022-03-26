class Github {
    constructor() {
        this.client_id = 'c23a49b6f405b326cb7a';
        this.client_secret = 'f456aa038def9bd2fbdf33983c73adeac9ca9b3c';
    }

    // get user request
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return { profile };
    }

}