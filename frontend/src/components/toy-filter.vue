<template>
    <section class="main-filter-container">
        <el-button style="width :200px" size="large" type="primary" @click="toEdit">Add Toy
        </el-button>
        <hr />
        <el-form-item>
            <p>Search</p>
            <el-input @input="setFilter" v-model="filterBy.query" placeholder="Toy name" />
        </el-form-item>
        <el-form-item>
            <custom-select size="small" v-model="filterBy.filters.sortBy" :allLabels="filterBy.sorts" />
        </el-form-item>
        <hr />
        <h3>Filter</h3>
        <form @change="setFilter">
            <el-checkbox v-model="filterBy.filters.inStock" :checked="filterBy.filters.inStock">In Stock
            </el-checkbox>
            <h4 class="fw-light">Labels</h4>
            <checkbox-group :labels="filterBy.labels" :checkedLabels="filterBy.filters.checkedLabels"
                @updateLabels="updateLabels" />
        </form>
    </section>
</template>
    
<script>
import checkboxGroup from './checkbox-group.vue'
import customSelect from './custom-select.vue'
export default {
    components: {
        checkboxGroup,
        customSelect
    },
    data() {
        return {
            filterBy: {
                query: '',
                filters: {
                    inStock: false,
                    checkedLabels: [],
                    sortBy: []

                },
                labels: [
                    'On wheels',
                    'Box game',
                    'Art',
                    'Baby',
                    'Doll',
                    'Puzzle',
                    'Outdoor',
                    'Battery powered',
                ],
                sorts: [
                    'price',
                    'date',
                    'name',
                ]
            },
        }
    },


    methods: {
        setFilter() {
            const filterBy = JSON.parse(JSON.stringify(this.filterBy))
            this.$emit('setFilter', filterBy)
        },
        toEdit() {
            this.$router.push('/toy/edit')
        },
        updateLabels(checkedLabels) {
            this.filterBy.filters.checkedLabels = checkedLabels
            this.setFilter()
        }

    },
    watch: {
        'filterBy.filters.sortBy'() {
            this.setFilter()
        }
    }
}

</script>
    
<style>
</style>