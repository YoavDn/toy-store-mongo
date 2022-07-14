

<template>
  <h2>Where to Find us </h2>
  <google-maps class="google-map"></google-maps>
</template>


<script >
import googleMaps from '../components/google-maps.vue'
export default {
  name: 'home',

  components: {
    googleMaps
  }
}

</script>


<style>
h2 {
  text-align: center
}
</style>