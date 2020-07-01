new Vue({
    el: '#app',
    data: {
        name: 'Max',
        counter: 0,
        secondCounter: 0,
        link: 'http://www.google.com'
    },
    computed: {
        output: function() {
            console.log("Computed");
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
        }
    },
    watch: {
        counter: function(value) {
            var vm = this;
            setTimeout(function() {
                vm.counter = 0;
            }, 2000);
        }
    },
    methods: {
        result: function() {
            console.log("Method")
            return this.counter > 5 ? 'Greater 5' : 'Smaller 5';
        },
        changeLink: function() {
            this.link = 'http://www.apple.com';
        }
    }
});