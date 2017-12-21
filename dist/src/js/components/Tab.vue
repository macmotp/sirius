<template>
    <div v-show="active"
         :aria-hidden="! active"
         role="tabpanel"
         class="tab">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'tab',

        props: {
            title: { required: true },
            icon: { type: String },
            onlyIcon: {
                type: Boolean,
                default: false
            },
        },

        data: () => ({
            active: false,
        }),

        computed: {
            hash() {
                return '#' + this.title.toLowerCase().replace(/ /g, '-');
            }

        },

        methods: {
            getTitle() {
                if(this.onlyIcon) {
                    return this.getIconHtml()
                } else {
                    return this.getIconHtml() + '<span>' + this.title + '</span>'
                }
            },
            getIconHtml() {
                return this.icon ? '<i class="' + this.icon + '"></i>' : '';
            }
        }
    };
</script>