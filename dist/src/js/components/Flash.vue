<template>
    <div class="flash">
        <transition-group name="slide-right" tag="div">
            <div class="notification"
                 v-for="(message, index) in messages"
                 :key="index"
                 :class="message.level"
                 v-show="message.show"
                 @click="close(message)">
                <button class="close"
                        v-if="closeButton"
                        @click="close(message)">
                </button>
                <div class="message"
                     v-text="message.body">
                </div>
            </div>
        </transition-group>
    </div>
</template>
<script>
    export default {
        name: 'flash',

        data () {
            return {
                messages: []
            }
        },
        props: {
            message: {
                type: String,
                default: null
            },
            level: {
                type: String,
                default: 'default'
            },
            closeButton: {
                type: Boolean,
                default: true
            },
            autoClose: {
                type: Boolean,
                default: true
            }
        },
        created() {
            if(this.message) {
                this.flash({
                    message: this.message,
                    level: this.level
                })
            }
            window.events.$on('flash', data => this.flash(data));
        },
        methods: {
            flash (data) {
                var message = this.format(data);
                var timeForTransition = 500;
                var timeToAutoclose = 5000;
                setTimeout(() => {
                    this.messages.push(message);
                }, timeForTransition);
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close(message);
                    }, timeToAutoclose);
                }
            },
            format(data) {
                return {
                    body: data.message.toString(),
                    level: data.level ? data.level : 'default',
                    show: true
                }
            },
            close(message) {
                message.show = false;
            }
        }
    }
</script>
