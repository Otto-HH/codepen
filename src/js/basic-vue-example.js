var app = new Vue({
    el: '#app',
    data: {
        weight: null,
        height: null,
    },
    computed: {
        result: function() {
            if(this.weight && this.height) {
                return Math.round(this.weight / (this.height * this.height) * 10000);
            } else {
                return 'Please enter values for calculation';
            }
        },
    },
    mounted() {

    },
    methods: {

    }
})