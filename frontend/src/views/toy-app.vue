<template>
    <article v-if="user" class="user-container flex">

        <el-dropdown>
            <span class="el-dropdown-link">
                Sign in as <span class='bold'>{{ user.fullname }}</span>
                <el-icon class="el-icon--right">
                    <arrow-down />
                </el-icon>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>Profile</el-dropdown-item>
                    <el-dropdown-item @click="logout">Logout</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>

    </article>

    <main v-if="toys" class="toys-section">

        <toy-filter class="toys-filter" :filter="filter" @setFilter="setFilter" />
        <toy-list class="toys-list" :toys="toys" @deleteToy="deleteToy" />
    </main>
</template>

<script>
import { ArrowDown } from '@element-plus/icons-vue'
import toyList from '../components/toy-list.vue';
import toyFilter from '../components/toy-filter.vue';
export default {
    components: {
        toyList,
        toyFilter,

    },
    created() {
        this.$store.dispatch({ type: 'loadToys' })
        this.$store.dispatch({ type: 'getLoggedInUser' }).catch(err => this.$router.push('/'))
    },
    methods: {
        deleteToy(toy) {
            this.$store.dispatch({ type: 'deleteToy', toy })
        },

        setFilter(filterBy) {
            this.$store.dispatch({ type: 'setFilter', filterBy })
        },
        logout() {
            this.$store.dispatch({ type: 'logout' })
            this.$router.push('/')
        }
    },
    computed: {
        toys() { return this.$store.getters.getToys },
        filter() { return this.$store.getters.getFilter },
        user() { return this.$store.getters.getUser }
    }
}
</script>