class GitHub {
    constructor() {
        this.client_id = 'bbbf4498246d29b3c7e7';
        this.client_secret = '1a37f4ae8d2ac84460ae54ef677c3a13d1ba0587';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    // async func always returns promise
    async getUser(user) {
        // await response of fetch call
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        // only proceed once promise is resolved
        // wait until get JSON version of profile (or not) and store result to var
        // await here because json() method returns promise as it waits for the response body to load and resolves with the result of parsing the body text as JSON
        const profile = await profileResponse.json();
        // only proceed once second promise is resolved

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await repoResponse.json();

        return {
            // same as profile: profile (for es5)
            profile,
            repos
        }

    }
};
