

<template>
  <section class="login-contianer shadow">
    <h2 class="bold">Log In</h2>
    <el-form class="login-form" @submit="login" :label-position="'right'" label-width="100px" :model="userInputs"
      style="max-width: 460px">
      <el-form-item label="Username">
        <el-input v-model="userInputs.username" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="userInputs.password" />
      </el-form-item>
      <el-button size="big" @click="login">Login</el-button>
    </el-form>
    <h3>does'nt have an account ?</h3>
    <el-button @click="toSignup">Sign up</el-button>
  </section>


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
    },
    toSignup() {
      this.$router.push('/signup')
    }
  }

}

</script>


<style>
h2 {
  text-align: center
}
</style>