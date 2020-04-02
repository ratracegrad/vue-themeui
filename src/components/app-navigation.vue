<template>
  <aside class="l-sidebar">
    <nav class="c-nav">
      <ChorusLogo></ChorusLogo>
      <ul>
        <li>
          <router-link to="/">Intro</router-link>
        </li>

        <li class="expandable" v-on:click="expandTypeMenu">
          Typography<res-icon name="down" size="small" v-show="!expandTypography"></res-icon> <res-icon name="up" size="small" v-show="expandTypography"></res-icon>
        </li>
        <div v-bind:class="{ show: expandTypography }" class="typography-list">
          <li class="sub"><router-link to="/fonts">Fonts</router-link></li>
          <li class="sub"><router-link to="/typesizing">Sizes</router-link></li>

          <li class="sub expandable" v-on:click="expandCharacterMetricsMenu">
            Character Metrics<res-icon name="down" size="small" v-show="!expandCharacters"></res-icon> <res-icon name="up" size="small" v-show="expandCharacters"></res-icon>
          </li>
          <div v-bind:class="{ show: expandCharacters }" class="characters-list">
            <li class="sub sub-sub">
              <router-link to="typography">Graphik</router-link>
            </li>
            <li class="sub sub-sub"><router-link to="lora">Lora</router-link></li>
          </div>


          <li class="sub expandable" v-on:click="expandTokensMenu">
            Tokens<res-icon name="down" size="small" v-show="!expandTokens"></res-icon> <res-icon name="up" size="small" v-show="expandTokens"></res-icon>
          </li>
          <div v-bind:class="{ show: expandTokens }" class="tokens-list">
            <li class="sub sub-sub">
              <router-link to="categories">Categories</router-link>
            </li>

            <li class="sub sub-sub">
              <router-link to="headings">Headings</router-link>
            </li>
            <li class="sub sub-sub"><router-link to="body">Body</router-link></li>
            <li class="sub sub-sub"><router-link to="meta">Meta</router-link></li>
            <li class="sub sub-sub"><router-link to="ui">UI</router-link></li>
          </div>
        </div>

        <li><router-link to="/spacing">Spacing</router-link></li>

        <li class="expandable" v-on:click="expandColorsMenu">
          Colors<res-icon name="down" size="small" v-show="!expandColors"></res-icon> <res-icon name="up" size="small" v-show="expandColors"></res-icon>
        </li>
        <div v-bind:class="{ show: expandColors }" class="colors-list">
          <li class="sub"><router-link to="/palette">Palette</router-link></li>
          <li class="sub">
            <router-link to="/colorgroups">Color Groups</router-link>
          </li>
        </div>
        <v-divider></v-divider>
        <li><router-link to="/menu1">Menu 1</router-link></li>
        <li><router-link to="/menu2">Menu 2</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
import ChorusLogo from "./ChorusLogo";

// to do: abstract all of this
export default {
  name: "app-navigation",
  components: {
    ChorusLogo
  },
  data: function () {
    return {
      expandTypography: false,
      expandCharacters: false,
      expandTokens: false,
      expandColors: false
    }
  },
  methods: {
    expandTypeMenu: function() {
      if(this.expandTypography){
        this.expandTypography = false
      } else {
        this.expandTypography = true
      }
    },
    expandCharacterMetricsMenu: function() {
      if(this.expandCharacters){
        this.expandCharacters = false
      } else {
        this.expandCharacters = true
      }
    },
    expandTokensMenu: function() {
      if(this.expandTokens){
        this.expandTokens = false
      } else {
        this.expandTokens = true
      }
    },
    expandColorsMenu: function() {
      if(this.expandColors){
        this.expandColors = false
      } else {
        this.expandColors = true
      }
    }
  }
};
</script>

<style>
.router-link-exact-active {
  font-weight: bold;
  background-color: #FDCB28;
}
</style>
