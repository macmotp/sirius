import FlashInterface from './mixins/FlashInterface.vue'
import ToggleInterface from './mixins/ToggleInterface.vue'
import Drawer from './components/Drawer.vue'
import Flash from './components/Flash.vue'
import Highlight from './components/Highlight.vue'
import MenuButton from './components/MenuButton.vue'
import Modal from './components/Modal.vue'
import Notification from './components/Notification.vue'
import Pagination from './components/Pagination.vue'
import ProgressBar from './components/ProgressBar.vue'
import Tab from './components/Tab.vue'
import Tabs from './components/Tabs.vue'

export default function (Vue){
    Vue.mixin(FlashInterface);
    Vue.mixin(ToggleInterface);
    Vue.component('drawer', Drawer);
    Vue.component('flash', Flash);
    Vue.component('highlight', Highlight);
    Vue.component('menu-button', MenuButton);
    Vue.component('modal', Modal);
    Vue.component('notification', Notification);
    Vue.component('pagination', Pagination);
    Vue.component('progress-bar', ProgressBar);
    Vue.component('tab', Tab);
    Vue.component('tabs', Tabs);
}