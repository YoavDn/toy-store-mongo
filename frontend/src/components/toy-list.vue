<template>
    <section class="toys-container">
        <toy-preview v-for="toy in toys" :key="toy._id" :toy="toy" @deleteToy="$emit('deleteToy', toy)" />
    </section>
</template>
    
<script>
import toyPreview from './toy-preview.vue'

export default {
    props: { toys: Array },
    components: {
        toyPreview,
    },

}
</script>
    
<style>
</style>