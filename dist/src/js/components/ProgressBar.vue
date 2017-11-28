<template>
    <div class="progress">
        <span class="value" v-show="value > 5">{{value}} %</span>
        <div class="bar" v-bind:style="{ width: value + '%' }"></div>
    </div>
</template>

<script>
    export default {
        name: 'progress',

        props: {

            type: {
                type: [Number, String],
                default: 'linear'
            },

            value: {
                type: [Number, String],
                default: 0
            }
        }
    }
</script>