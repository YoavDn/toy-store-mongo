

<template>

  <h3>Log In</h3>
  <el-form @submit="login" :label-position="'right'" label-width="100px" :model="userInputs" style="max-width: 460px">
    <el-form-item label="Username">
      <el-input v-model="userInputs.username" />
    </el-form-item>
    <el-form-item label="Password">
      <el-input v-model="userInputs.password" />
    </el-form-item>
    <el-button @click="login">Login</el-button>

  </el-form>

  <h2>Where to Find us </h2>

  <google-maps class="google-map"></google-maps>
</template>


<script >
import googleMaps from '../components/google-maps.vue'
export default {
  name: 'home',

  components: {
    googleMaps
  },

  data() {
    return {
      userInputs: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    login() {
      this.$store.dispatch({ type: 'login', userInputs: this.userInputs })
        .then(user => this.$router.push('/toy'))
        .catch(err => console.log('err wrong crudsafdkjlk'))
    }
  }

}

</script>


<style>
h2 {
  text-align: center
}
</style>