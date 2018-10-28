var app = new Vue({
    el: ".app",
    
    data(){
        return{
            user: "renabil",
            repo: "incommit",
            repolink: "https://github.com/renabil/incommit",
            githubdata: [],
            error: "none"
        }
    },

    methods: {
        getData(){

            fetch("https://api.github.com/repos/" + this.user + "/" + this.repo + "/commits")
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.githubdata = json;
            })
        }
    }
    
})