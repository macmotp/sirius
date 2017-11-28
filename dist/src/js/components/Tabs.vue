<template>
    <nav class="tabs">
        <ul role="tablist">
            <li v-for="tab in tabs"
                :class="{ 'active': tab.active }"
                role="presentation">
                <a :href="tab.hash"
                   v-html="tab.getTitle()"
                   :aria-selected="tab.active"
                   role="tab"
                   @click="select(tab.hash)">
                </a>
            </li>
        </ul>
        <slot></slot>
    </nav>
</template>

<script>

    export default {

        data: () => ({
            tabs: [],
            activeTabHash: '',
        }),

        props: {
            changeUrl: {
                type: Boolean,
                default: false
            }
        },

        created() {
            this.tabs = this.$children;
        },

        mounted() {
            if (this.changeUrl) {
                window.addEventListener('hashchange', () => this.select(window.location.hash));

                if (this.find(window.location.hash)) {
                    this.select(window.location.hash);
                    return;
                }
            }

            if (this.tabs.length) {
                this.select(this.tabs[0].hash);
            }
        },

        methods: {
            find(hash) {
                return this.tabs.find(tab => tab.hash === hash);
            },

            select(selectedTabHash) {
                let selectedTab = this.find(selectedTabHash);

                if (!selectedTab) {
                    return;
                }

                this.tabs.forEach(tab => {
                    tab.active = (tab.hash === selectedTab.hash);
                });

                //this.$emit('changed', {tab: selectedTab});

                this.activeTabHash = selectedTab.hash;

            },
        },
    };
</script>