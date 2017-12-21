<template>
    <div class="notification" :class="classes">
        <button class="close" v-if="closeButton" @click="close()"></button>
        <div class="message">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {

        name: 'notification',

        data() {
            return {
                show: true
            }
        },

        props: {
            closeButton: {
                type: Boolean,
                default: true
            },
            level: {
                type: String,
                default: null
            }
        },

        computed: {
            classes() {
                return [
                    this.level ? this.level : '',
                    this.show ? 'active' : ''
                ];
            }
        },

        methods: {
            close() {
                this.$emit('remove');
                this.show = false;
            }
        }

    }
</script>