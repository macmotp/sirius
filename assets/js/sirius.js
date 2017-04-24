var Vue = require('vue')

Vue.component('sirius-menu', require('./components/SiriusMenu.vue'));
Vue.component('sirius-multi-list', require('./components/SiriusMultiList.vue'));

new Vue({
    el: '#sirius'
})