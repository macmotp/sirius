<template>
    <div class="modal" v-bind:class="{ active: visible }">
        <div class="overlay" @click="clickedOutside"></div>
        <button v-if="showCloseButton" class="close" @click="toggle"></button>
        <div class="container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                visible: false
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

        methods: {
            clickedOutside() {
                if(this.closeOnExternalClick) {
                    this.toggle()
                }
            },
            toggle() {
                this.visible = !this.visible;
            }
        }

    }
</script>