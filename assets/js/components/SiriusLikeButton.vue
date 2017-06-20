<template>
    <button class="like" @click="toggle">
        <i class="fa fa-heart-o" v-show="!like && type == 'heart'"></i>
        <i class="fa fa-heart" v-show="like && type == 'heart'"></i>
        <i class="fa fa-star-o" v-show="!like && type == 'star'"></i>
        <i class="fa fa-star" v-show="like && type == 'star'"></i>
    </button>
</template>

<script>
    export default {

        data() {
            return {
                like: this.active
            }
        },

        props: {
            type: {
                type: String,
                default: 'heart'
            },
            active: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            toggle() {
                this.like = !this.like;
            }
        }

    }
</script>