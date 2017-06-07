<template>
    <ul class="pagination">
        <li v-if="this.simple" v-bind:class="{ disabled: list.current_page == 1 }">
            <button class="move-left small with-icon" @click.prevent="changePage(list.current_page - 1)">
                <i class="fa fa-chevron-left"></i>
                <span>{{this.previousText}}</span>
            </button>
        </li>
        <li v-if="list.current_page > 1 && !this.simple && this.showIndicators">
            <button class="small" @click.prevent="changePage(list.current_page - 1)">
                <i class="fa fa-chevron-left"></i>
            </button>
        </li>
        <li v-for="page in pagesNumber" v-bind:class="{active: page == list.current_page, disabled: page == '...'}">
            <button class="small" @click.prevent="changePage(page)">{{ page }}</button>
        </li>
        <li v-if="list.current_page < list.last_page && !this.simple && this.showIndicators">
            <button class="small" @click.prevent="changePage(list.current_page + 1)">
                <i class="fa fa-chevron-right"></i>
            </button>
        </li>
        <li v-if="this.simple" v-bind:class="{ disabled: list.current_page == list.to }">
            <button class="move-right small with-icon" href="#" @click.prevent="changePage(list.current_page + 1)">
                <span>{{this.nextText}}</span>
                <i class="fa fa-chevron-right"></i>
            </button>
        </li>
    </ul>
</template>
<script>
    export default{
        props: {
            list: {
                type: Object,
                default: function () {
                    return {
                        current_page: 1,
                        data: [],
                        from: 1,
                        last_page: 1,
                        next_page_url: null,
                        per_page: 10,
                        prev_page_url: null,
                        to: 1,
                        total: 0,
                    }
                }
            },
            per_page: {
                type: Number,
                default: 10
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
            }
        },
        computed: {
            pagesNumber: function () {
                if (!this.list.to) {
                    return [];
                }
                else if (this.simple) {
                    return [];
                } else {

                    if (this.list.to <= 5) {
                        return this.range(1, this.length)
                    }
                    else {
                        let min = this.list.current_page - 3
                        min = min > 0 ? min : 1
                        let max = min + 6
                        max = max <= this.list.to ? max : this.list.to
                        if (max === this.list.to) {
                            min = this.list.to - 6
                        }
                        const range = this.range(min, max)
                        if (this.list.current_page >= 4 && this.list.to > 6) {
                            range.splice(0, 2, 1, '...')
                        }
                        if (this.list.current_page + 3 < this.list.to && this.list.to > 6) {
                            range.splice(range.length - 2, 2, '...', this.list.to)
                        }
                        return range
                    }
                }

            }
        },
        methods: {
            changePage: function (page) {
                this.list.current_page = page;
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