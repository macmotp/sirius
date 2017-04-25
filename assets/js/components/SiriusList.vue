<template>
    <div>
        <div v-if="isParent">
            <transition name="slide-fade-left">
                <div class="list-slider" v-show="active">
                    <ul class="list">
                        <slot></slot>
                    </ul>
                </div>
            </transition>
        </div>
        <div v-if="!isParent">
            <transition name="slide-fade-right">
                <div class="list-slider" v-show="active">
                    <div class="breadcrumb">
                        <span @click="resetList">{{parentElement.listName}}</span>
                        <span><i class="fa fa-arrow-right"></i></span>
                        <span>{{listName}}</span>
                    </div>
                    <ul class="list">
                        <slot></slot>
                    </ul>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {

        data() {
            return {
                active: false,
                parentElement: null
            }
        },

        created() {
            this.active = this.isParent;
            this.parentElement = {
                listName: ''
            }
        },

        props: {
            listName: {
                type: String,
                default: 'main'
            },

            isParent: {
                type: Boolean,
                default: false
            }
        },

        methods: {
            slideIn($el) {
                if ($el) {
                    $el.slideOut();
                    this.parentElement = $el;
                }
                this.active = true;

            },
            slideOut() {
                this.active = false;
            },
            resetList() {
                this.active = false;
                this.parentElement.slideIn();
            }
        }

    }
</script>