<template>
    <button :class="classes" @click="activate"></button>
</template>

<script>
    export default {

        name: 'menu-button',

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
                this.findEndpoint().toggle();
            },
            findEndpoint() {
                if(!(this.isEmpty(this.$refs))) {
                    return this.$refs[this.endpoint];
                } else if(!(this.isEmpty(this.$parent.$refs))) {
                    return this.$parent.$refs[this.endpoint];
                } else if(!(this.isEmpty(this.$parent.$parent.$refs))) {
                    return this.$parent.$parent.$refs[this.endpoint];
                } else if(!(this.isEmpty(this.$parent.$parent.$parent.$refs))) {
                    return this.$parent.$parent.$parent.$refs[this.endpoint];
                }
            },
            isEmpty(object) {
                return (Object.keys(object).length === 0 && object.constructor === Object)
            }
        }
    };
</script>