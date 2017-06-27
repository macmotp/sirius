var Vue = require('vue');

Vue.component('sirius-like-button', require('./components/SiriusLikeButton.vue'));
Vue.component('sirius-list', require('./components/SiriusList.vue'));
Vue.component('sirius-menu', require('./components/SiriusMenu.vue'));
Vue.component('sirius-modal', require('./components/SiriusModal.vue'));
Vue.component('sirius-notification', require('./components/SiriusNotification.vue'));
Vue.component('sirius-pagination', require('./components/SiriusPagination.vue'));
Vue.component('sirius-progress-bar', require('./components/SiriusProgressBar.vue'));
Vue.directive('sirius-class', require('./directives/SiriusClass.vue'));
Vue.directive('sirius-trigger-class', require('./directives/SiriusTriggerClass.vue'));

new Vue({
    el: '#sirius',
    data() {
        return {
            basicNotifications: [
                { message: 'Hello there!', showRemoveButton: false }
            ],
            paginationList: {
                current_page: 1,
                data: [
                    {index:1},{index:2},{index:3},{index:4},{index:5},{index:6},{index:7},{index:8},{index:9},{index:10},
                    {index:11},{index:12},{index:13},{index:14},{index:15},{index:16},{index:17},{index:18},{index:19},{index:20},
                    {index:21},{index:22},{index:23},{index:24},{index:25},{index:26},{index:27},{index:28},{index:29},{index:30},
                    {index:31},{index:32},{index:33},{index:34},{index:35},{index:36},{index:37},{index:38},{index:39},{index:40},
                    {index:41},{index:42},{index:43},{index:44},{index:45},{index:46},{index:47},{index:48},{index:49},{index:50},
                    {index:51},{index:52},{index:53},{index:54},{index:55},{index:56},{index:57},{index:58},{index:59},{index:60},
                ],
                from: 1,
                last_page: 12,
                next_page_url: null,
                per_page: 5,
                prev_page_url: null,
                to: 12,
                total: 60,
            },
            interval: {},
            progressBarValue: 0
        }
    },
    mounted () {
        this.interval = setInterval(() => {
            if (this.progressBarValue === 100) {
                return (this.progressBarValue = 0)
            }
            this.progressBarValue += 10
        }, 1000)
    },
    methods: {
        addBasicNotification() {
            if (this.basicNotifications.length <= 2)
                this.basicNotifications.push({ message: 'Another One!' });
            else if (this.basicNotifications.length == 3)
                this.basicNotifications.push({ message: 'Last One!' });
        },
        getCurrentPageData() {
            var start = (this.paginationList.current_page - 1) * this.paginationList.per_page;
            var end = start + this.paginationList.per_page;
            return this.paginationList.data.slice(start, end);
        }
    },

});