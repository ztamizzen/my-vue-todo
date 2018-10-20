<template>
  <div id="app" class="container">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
}

#nav {
  padding: 30px;
  a {
    color: #2c3e50;
    font-weight: 600;
  }

  a.router-link-exact-active {
    color: #42b983;
  }
}
</style>
