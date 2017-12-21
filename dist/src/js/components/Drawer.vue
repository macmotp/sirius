<template>
    <aside :class="classes">
        <div class="overlay" @click="clickedOutside"></div>
        <div class="content">
            <button v-if="showCloseButton" class="close" @click="toggle"></button>
            <slot></slot>
        </div>
    </aside>
</template>

<script>
    export default {

        name: 'drawer',

        data() {
            return {
                active: false
            }
        },

        props: {
            showCloseButton: {
                type: Boolean,
                default: true
            },
            closeOnExternalClick: {
                type: Boolean,
                default: true
            }
        },

        computed: {
            classes() {
                return [
                    'drawer',
                    this.active ? 'active' : ''
                ]
            },
        },

        methods: {
            clickedOutside() {
                if(this.closeOnExternalClick) {
                    this.toggle()
                }
            },
            toggle() {
                this.active = !this.active;
            }
        }

    }
</script>