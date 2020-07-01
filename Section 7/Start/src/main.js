import Vue from 'vue'
import App from './App.vue'

Vue.component('app-server', App);

new Vue({
  el: '#app',
  render: h => h(App)
})
