var Vue = require('vue');

Vue.component('sirius-menu', require('./components/SiriusMenu.vue'));
Vue.component('sirius-notification', require('./components/SiriusNotification.vue'));
Vue.component('sirius-list', require('./components/SiriusList.vue'));

new Vue({
    el: '#sirius',
    data() {
        return {
            basicNotifications: [
                { message: 'Hello there!', showRemoveButton: false }
            ]
        }
    },
    methods: {
        addBasicNotification() {
            if (this.basicNotifications.length <= 2)
                this.basicNotifications.push({ message: 'Another One!' });
            else if (this.basicNotifications.length == 3)
                this.basicNotifications.push({ message: 'Last One!' });
        }
    }
});