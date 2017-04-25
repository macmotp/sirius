<template>
    <menu class="menu" v-bind:class="{ active: visible }">
        <div class="overlay" @click="clickedOutside"></div>
        <div class="content">
            <div class="container">
                <button v-if="showCloseButton" class="close" @click="toggle"></button>
                <slot></slot>
            </div>
        </div>
    </menu>
</template>

<script>
    export default {

        data() {
            return {
                visible: false
            }
        },

        props: {
            color: {
                type: String,
                default: null
            },
            showCloseButton: {
                type: Boolean,
                default: true
            },
            closeOnExternalClick: {
                type: Boolean,
                default: true
            },
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