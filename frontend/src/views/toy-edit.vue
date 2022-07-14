<template>
    <h2 class="edit-title" v-if="toy && toy._id"> Update Toy </h2>
    <h2 class="edit-title" v-else> Make new Toy</h2>
    <router-link to="/toy">&leftarrow; Back</router-link>
    <div v-if="toy">
        <el-form class="edit-toy-form shadow " @submit="saveToy" :label-position="labelPosition" label-width="100px"
            :model="formLabelAlign">
            <el-form-item label="Toy Name:">
                <el-input v-model="toy.name" placeholder="Toy name" name="toy-name" />
            </el-form-item>
            <el-form-item label="Toy Price:">
                <el-input-number v-model="toy.price" :min="1" :max="1300" />
            </el-form-item>
            <custom-select v-model="toy.labels" :allLabels="allLabels" />
            <el-switch text-width="100px" inactive-text="In Stock:" v-model="toy.inStock" />
            <br />

            <el-button class="save-btn" @click="saveToy">save</el-button>
        </el-form>
    </div>
</template>
    
<script>
import { toyService } from '../services/toy.service.js'
import customSelect from '../components/custom-select.vue'
import { refThrottled } from '@vueuse/core'

export default {
    name: 'toyEdit',
    components: {
        customSelect,
    },
    data() {
        return {
            toy: null,
            filterBy: { ...this.$store.getters.getFilter }
        }
    },
    methods: {
        saveToy() {
            this.$store.dispatch({ type: 'saveToy', toy: this.toy })
            this.$router.push('/toy')
        }
    },
    created() {
        const { toyId } = this.$route.params
        if (toyId) {
            toyService.getById(toyId).then(toy => this.toy = { ...toy })
        } else {
            this.toy = toyService.getEmptyToy()
        }
    },
    computed: {
        allLabels() {
            const labels = this.$store.getters.getFilter.labels
            console.log(labels);
            return labels
        },

    }
}
</script>
    
<style>
.edit-title {
    text-align: center;
}

.el-switch__label {
    width: 100px;
    text-align: end;
    padding: 0 12px 0 0;
    box-sizing: border-box;
}
</style>