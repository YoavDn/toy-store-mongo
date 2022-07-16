
<template>
    <h3>hello from sign up</h3>
    <sign-up-form @addUser="addUser" />
</template>
<script setup>
import { useStore } from 'vuex'
import signUpForm from '../components/sign-up-form.vue';
name: 'signup'
const store = useStore()

const addUser = (newUserInputs) => store.dispatch({ type: 'addUser', userToAdd: newUserInputs })

</script>
    
<style>
</style>