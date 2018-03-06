<template>
  <div id="app">
    <div class="header">
      <nav>
        <router-link to="/" exact>Top</router-link>
        <router-link to="/About">About</router-link>
        <router-link to="/Contact">Contact</router-link>
        <router-link to="/SignIn">SignIn</router-link>
      </nav>
    </div>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
