<template>
  <aside class="l-sidebar">
    <nav class="c-nav">
      <ChorusLogo></ChorusLogo>
      <ul>
        <li>
          <router-link to="/">Intro</router-link>
        </li>

        <li class="expandable" v-on:click="expand">Typography<res-icon name="up" size="small"></res-icon></li>

        <li class="sub"><router-link to="/fonts">Fonts</router-link></li>
        <li class="sub"><router-link to="/typesizing">Sizes</router-link></li>

        <li class="sub expandable">Character Spacing<res-icon name="up" size="small"></res-icon></li>
        <li class="sub sub-sub"><router-link to="typography">Graphik</router-link></li>
        <li class="sub sub-sub"><router-link to="lora">Lora</router-link></li>

        <li class="sub expandable">Tokens<res-icon name="up" size="small"></res-icon></li>
        <li class="sub sub-sub"><router-link to="categories">Categories</router-link></li>

        <li class="sub sub-sub"><router-link to="headings">Headings</router-link></li>
        <li class="sub sub-sub"><router-link to="body">Body</router-link></li>
        <li class="sub sub-sub"><router-link to="meta">Meta</router-link></li>
        <li class="sub sub-sub"><router-link to="ui">UI</router-link></li>

        <li><router-link to="/spacing">Spacing</router-link></li>

        <li class="expandable">Colors<res-icon name="up" size="small"></res-icon></li>
        <li class="sub"><router-link to="/palette">Palette</router-link></li>
        <li class="sub"><router-link to="/colorgroups">Color Groups</router-link></li>
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
  },
  methods: {
    expand: function() {
      alert("need to refactor this for collapse functionality");
    }
  }
};
</script>

<style>
.router-link-exact-active {
  font-weight: bold;
  background-color: #ffe068;
}
</style>
