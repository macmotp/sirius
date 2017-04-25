var Vue = require('vue')

Vue.component('sirius-menu', require('./components/SiriusMenu.vue'));
Vue.component('sirius-list', require('./components/SiriusList.vue'));

new Vue({
    el: '#sirius'
})