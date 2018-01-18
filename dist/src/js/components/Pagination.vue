<template>
    <ul class="pagination" v-if="shouldPaginate">
        <li v-show="showIndicators">
            <a :href="dataSet.prev_page_url" class="button move-left small with-icon" v-bind:class="{ disabled: !prevUrl }" rel="prev" @click.prevent="page--">
                <i class="fa fa-chevron-left"></i>
                <span v-show="showIndicatorsText" v-text="previousText"></span>
            </a>
        </li>
        <li v-for="page in pagesNumber" v-show="!simple" :key="page">
            <a :href="dataSet.prev_page_url" class="button small" v-bind:class="{active: page == dataSet.current_page, disabled: page == '...'}" @click.prevent="goToPage(page)" v-text="page"></a>
        </li>
        <li v-show="showIndicators">
            <a :href="dataSet.next_page_url" class="button move-right small with-icon" v-bind:class="{ disabled: !nextUrl }" rel="next" @click.prevent="page++">
                <span v-show="showIndicatorsText" v-text="nextText"></span>
                <i class="fa fa-chevron-right"></i>
            </a>
        </li>
    </ul>
</template>
<script>
    export default{
        name: 'pagination',

        props: {
            dataSet: {
                type: Object,
                default: {}
            },
            simple: {
                type: Boolean,
                default: false
            },
            previousText: {
                type: String,
                default: "Prev"
            },
            nextText: {
                type: String,
                default: "Next"
            },
            showIndicators: {
                type: Boolean,
                default: true
            },
            showIndicatorsText: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                page: 1,
                prevUrl: false,
                nextUrl: false
            }
        },
        watch: {
            dataSet() {
                this.page = this.dataSet.current_page;
                this.prevUrl = this.dataSet.prev_page_url;
                this.nextUrl = this.dataSet.next_page_url;
            },

            page() {
                this.broadcast();
                this.updateUrl();
            }
        },
        computed: {
            shouldPaginate() {
                this.prevUrl = this.dataSet.prev_page_url;
                this.nextUrl = this.dataSet.next_page_url;
                return !! this.prevUrl || !! this.nextUrl
            },
            pagesNumber: function () {
                if (!this.dataSet.last_page) {
                    return [];
                }
                else if (this.simple) {
                    return [];
                } else {

                    if (this.dataSet.last_page <= 5) {
                        return this.range(1, this.length)
                    }
                    else {
                        let min = this.dataSet.current_page - 3
                        min = min > 0 ? min : 1
                        let max = min + 6
                        max = max <= this.dataSet.last_page ? max : this.dataSet.last_page
                        if (max === this.dataSet.last_page) {
                            min = this.dataSet.last_page - 6
                        }
                        const range = this.range(min, max)
                        if (this.dataSet.current_page >= 4 && this.dataSet.last_page > 6) {
                            range.splice(0, 2, 1, '...')
                        }
                        if (this.dataSet.current_page + 3 < this.dataSet.last_page && this.dataSet.last_page > 6) {
                            range.splice(range.length - 2, 2, '...', this.dataSet.last_page)
                        }
                        return range
                    }
                }

            }
        },
        methods: {
            goToPage: function (page) {
                this.page = page;
                this.broadcast();
            },
            broadcast() {
                return this.$emit('changed', this.page);
            },
            updateUrl() {
                history.pushState(null, null, '?page=' + this.page);
            },
            range (from, to) {
                const range = []
                from = from > 0 ? from : 1
                for (let i = from; i <= to; i++) {
                    range.push(i)
                }
                return range
            }
        }
    }
</script>