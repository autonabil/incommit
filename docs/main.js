var app = new Vue({
    el: ".app",
    
    data(){
        return{
            user: "renabil",
            repo: "incommit",
            repodata: [],
        }
    },

    methods: {
        getRepos(user){

            fetch("https://api.github.com/users/" + user + "/repos")
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.repodata = json;
            })
        }
    },

    mounted(){
        this.getRepos('renabil')
    }
    
})