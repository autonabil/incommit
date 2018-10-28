var app = new Vue({
    el: ".app",
    
    data(){
        return{
            user: "",
            repo: "",
            repolink: "https://github.com/autonabil/incommit",
            githubdata: [],
        }
    },

    methods: {
        getData(){

            fetch(link)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.githubdata = json;
            })
        }
    }
    
})