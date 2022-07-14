<template>
    <main class="toys-section">
        <toy-filter class="toys-filter" :filter="filter" @setFilter="setFilter" />
        <toy-list class="toys-list" :toys="toys" @deleteToy="deleteToy" />
    </main>
</template>

<script>
import toyList from '../components/toy-list.vue';
import toyFilter from '../components/toy-filter.vue';
export default {
    components: {
        toyList,
        toyFilter,

    },
    created() {
        this.$store.dispatch({ type: 'loadToys' })
    },
    methods: {
        deleteToy(toy) {
            this.$store.dispatch({ type: 'deleteToy', toy })
        },

        setFilter(filterBy) {
            this.$store.dispatch({ type: 'setFilter', filterBy })
        }
    },
    computed: {
        toys() { return this.$store.getters.getToys },
        filter() { return this.$store.getters.getFilter },
        toys() { return this.$store.getters.getToys }
    }
}
</script>