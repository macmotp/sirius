/*
 *
 * app.js
 * This is just a boilerplate for development
 *
 */

import Vue from 'vue'
import Sirius from 'sirius-ui'

window.events = new Vue();

Vue.use(Sirius);

// Apply Sirius to the dev page
new Vue({
    el: '#sirius',
    mounted () {
        console.log("Sirius works!")
    }
});