/*
 *
 * app.js
 * This is just a boilerplate for documentation
 *
 */

import Vue from 'vue'
import Sirius from '../../dist/src/js/sirius'

window.events = new Vue();

Vue.use(Sirius);

// Apply Sirius to the dev page
new Vue({
    el: '#sirius',
    mounted () {
        console.log("Sirius works!")
    }
});