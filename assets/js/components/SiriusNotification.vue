<template>
    <div class="notification" v-bind:class="{ active: visible }">
        <button class="close" v-if="showRemoveButton" @click="close()"></button>
        <h2 class="message">
            <slot></slot>
        </h2>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                visible: true
            }
        },

        props: {
            showRemoveButton: {
                type: Boolean,
                default: true
            }
        },

        methods: {
            close() {
                this.$emit('remove');
                this.visible = false;
            }
        }

    }
</script>