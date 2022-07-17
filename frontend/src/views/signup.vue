
<template>
    <router-link to="/">&LeftArrow; Back</router-link>
    <h2 class="bold">sign up</h2>
    <sign-up-form class="login-contianer" @addUser="addUser" />
</template>
<script setup>
import { useStore } from 'vuex'
import signUpForm from '../components/sign-up-form.vue';
name: 'signup'
const store = useStore()

const addUser = (newUserInputs) => store.dispatch({ type: 'addUser', userToAdd: newUserInputs })

</script>
    
<style scoped>
h2 {
    font-size: 4rem;
    margin-top: 2rem;
    color: rgb(36, 36, 36);
}

a {
    padding: 2rem;
    position: absolute;
}
</style>