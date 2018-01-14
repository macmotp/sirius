<template>
    <div class="progress">
        <span class="value" v-show="integerValue > 5 && showLabel">{{integerValue}} %</span>
        <div class="bar" v-bind:style="{ width: integerValue + '%' }"></div>
    </div>
</template>

<script>
    export default {
        name: 'progress-bar',

        props: {

            value: {
                type: [Number, String],
                default: 0
            },

            showLabel: {
                type: Boolean,
                default: true
            }
            
        },

        computed: {
            integerValue() {
                if (this.value > 100) {
                    return 100;
                } else if (this.value < 0) {
                    return 0;
                } else {
                    return parseInt(this.value);
                }
            },
        }
    }
</script>