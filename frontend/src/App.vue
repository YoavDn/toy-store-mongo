
<template>
  <header class="main-header  ">
    <div class="main-nav">
      <h2 class="logo">TOY STORE </h2>
      <nav>
        <RouterLink class=" nav-link home" to="/">Home</RouterLink>
        <RouterLink class="nav-link  toys" to="/toy">Toys</RouterLink>
        <RouterLink class="nav-link about" to="/about">About</RouterLink>
      </nav>

    </div>
  </header>
  <RouterView />
</template>

<script >
export default {


}

</script>

<style lang="scss" >
@import './styles/main.scss';
</style>