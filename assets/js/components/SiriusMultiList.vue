<template>
    <div>
        <transition name="slide-fade-left">
            <div class="list-slider" v-show="list==='main'">
                <ul class="list">
                    <a href="/docs/get-started"><li>Get Started</li></a>
                    <li @click="openSublist('elements')">
                        <span>Elements</span>
                        <i class="fa fa-ellipsis-h"></i>
                    </li>
                </ul>
            </div>
        </transition>
        <transition name="slide-fade-right">
            <div class="list-slider" v-show="list==='elements'">
                <ul class="list">
                    <li v-if="breadcrumb" class="breadcrumb">
                        <span @click="resetList()">Documentation</span>
                        <span><i class="fa fa-arrow-right"></i></span>
                        <span>Elements</span>
                    </li>
                    <a href="/docs/elements/button"><li>Button</li></a>
                </ul>
            </div>
        </transition>

    </div>
</template>

<script>
    export default {

        data() {
            return {
                list: 'main',
                breadcrumb: false
            }
        },

        methods: {
            openSublist(name) {
                this.list = name;
                this.breadcrumb = this.list != 'main';
            },
            resetList() {
                this.list = 'main';
                this.breadcrumb = false;
            }
        }

    }
</script>