<template>
    <div class="toy-card  shadow" @click="goToDetails">
        <h2 class="toy-name">{{ toy.name }}</h2>
        <div class="toy-img-contianer">
            <img src="../assets/img/toy-demo-img.jpeg" alt="">
        </div>
        <h2 class=" toy-price">${{ priceToString }}</h2>
        <div class="toy-btns flex">
            <el-popconfirm title="Are you sure to delete this?">
                <template #reference>
                    <el-button type="danger" @click.stop="$emit('deleteToy', toy)">Delete</el-button>
                </template>
            </el-popconfirm>
            <el-button @click.stop="goToEdit">Edit</el-button>
        </div>
        <div :class="stockStyle"></div>
        <p v-if="!toy.inStock" class="toy-stock-msg">{{ stock }}</p>
    </div>
</template>
    
<script >

export default {
    props: { toy: Object },

    computed: {
        stock() { return this.toy.inStock ? 'In Stock !' : "Out of stock" },
        stockStyle() {
            return { 'outOfStock': !this.toy.inStock }
        },
        priceToString() {
            return this.toy.price.toFixed(2).toLocaleString()
        }

    },
    methods: {
        goToDetails() {
            if (!this.toy.inStock) return
            this.$router.push(`/toy/${this.toy._id}`)
        },
        goToEdit() {
            if (!this.toy.inStock) return
            this.$router.push(`/toy/edit/${this.toy._id}`)
        }
    }
}

</script>
    
<style>
.router-link {
    margin-inline-end: 1rem;
}
</style>