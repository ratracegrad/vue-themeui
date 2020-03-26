<template>
  <aside class="l-sidebar">
    <nav class="c-nav">
      <ChorusLogo></ChorusLogo>
      <ul>
        <li>
          <router-link to="/">Intro</router-link>
        </li>
        <li><router-link to="/fonts">Fonts</router-link></li>
        <li><router-link to="/categories">Type categories</router-link></li>
        <li><router-link to="/typography">Typography</router-link></li>

        <li><router-link to="/sizing">Type sizing</router-link></li>
        <li><router-link to="/spacing">Spacing</router-link></li>
        <v-divider></v-divider>
        <li><router-link to="/menu1">Menu 1</router-link></li>
        <li><router-link to="/menu2">Menu 2</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import ChorusLogo from "./ChorusLogo";

export default {
  name: "app-navigation",
  components: {
    ChorusLogo
  }
};
</script>

<style>
.router-link-exact-active {
  background-color: #fff3c2;
}
</style>
