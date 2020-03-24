<template>
  <div id="app">
    <main class="l-main">
      <app-navigation></app-navigation>
      <router-view />
    </main>
  </div>
</template>

<script>
import AppNavigation from "@/components/app-navigation";
export default {
  components: {
    AppNavigation
  }
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

/*.router-link-exact-active {*/
/*  background-color: #fff3c2;*/
/*}*/
</style>
