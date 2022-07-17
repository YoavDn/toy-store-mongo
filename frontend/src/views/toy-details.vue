
<template>
    <router-link class="back-router-link" to="/toy">&leftarrow; Back</router-link>
    <section v-if="toy" class="toy-details">
        <div class="detail-main-text">
            <h2>{{ toy.name }}</h2>
            <h3>Lorem, ipsum dolor.</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio soluta quae, exercitationem consequuntur
                sed
                dicta nemo obcaecati molestias alias aliquam blanditiis ut itaque, enim architecto nobis sequi nam optio
                reprehenderit?</p>
            <h3>Price: {{ toy.price }}</h3>
            <el-button>Add to Cart</el-button>
        </div>
        <div class="details-img">
            <img src="../assets/img/toy-demo-img.jpeg" alt="">
        </div>
    </section>
</template>
    
<script  >
import { useRoute } from 'vue-router'
import { toyService } from '../services/toy.service'
import { ref } from 'vue'
export default {
    name: 'toyDetails',

    setup() {
        const { toyId } = useRoute().params
        let toy = ref(null)
        toyService.getById(toyId).then(resToy => toy.value = { ...resToy })
        return { toy }
    }
}
</script>
    
<style>
.back-router-link {
    margin-inline: 3rem;
}
</style>