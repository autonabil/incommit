var app = new Vue({
    el: ".app",
    
    data(){
        return{
            user: "renabil",
            repo: "incommit",
            repodata: [],
            commitsdata: [],
        }
    },

    methods: {
        getRepos(user){

            fetch("https://api.github.com/users/" + user + "/repos")
            .then(response => response.json())
            .then(json => {
                this.repodata = json;
            })
        },

        getCommits(reponame,username){
            fetch("https://api.github.com/repos/" + username + "/" + reponame + "/commits")
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.commitsdata = json
            })
        }
    },

    mounted(){
        this.getRepos('google')
    }
    
})