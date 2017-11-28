<template>
    <button :class="classes" @click="activate"></button>
</template>

<script>
    export default {
        data() {
            return {
                active: false
            }
        },
        props: {
            alwaysVisible: {
                type: Boolean,
                default: false
            },
            endpoint: {
                type: String,
                default: ''
            }
        },

        computed: {
            classes() {
                return [
                    'toggle',
                    this.alwaysVisible ? 'visible' : '',
                    this.active ? 'active' : ''
                ]
            },
        },

        methods: {
            activate() {
                //this.active = !this.active;
                this.triggerEndpoint();
            },
            triggerEndpoint() {
                this.$parent.$refs[this.endpoint].toggle();
            }
        }
    };
</script>