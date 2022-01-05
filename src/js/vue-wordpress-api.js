var app = new Vue({
    el: '#app',
    data: {
        posts: []
    },
    computed: {

    },
    mounted() {
        axios.get('https://blog.codepen.io/wp-json/wp/v2/posts')
            .then(response =>  {
                this.posts = response.data
            })
    },
    methods: {
        getPostImage(post) {
            return post.image ? post.image : 'https://fakeimg.pl/600x400/?text=No%20Image';
        }
    }
})