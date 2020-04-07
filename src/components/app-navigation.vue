<template>
  <aside class="l-sidebar">
    <nav class="c-nav">
      <ChorusLogo></ChorusLogo>

      <ul>
        <li>
          <router-link to="/">Intro</router-link>
        </li>

        <collapse :selected="false">
          <div slot="collapse-header">
            Typography
          </div>
          <ul slot="collapse-body">
            <li class="sub"><router-link to="/fonts">Fonts</router-link></li>
            <li class="sub">
              <router-link to="/typesizing">Sizes</router-link>
            </li>
          </ul>
        </collapse>

        <li><router-link to="/spacing">Spacing</router-link></li>

        <collapse :selected="false">
          <div slot="collapse-header">
            Colors
          </div>
          <ul slot="collapse-body">
            <li class="sub">
              <router-link to="/palette">Palette</router-link>
            </li>
            <li class="sub">
              <router-link to="/colorgroups">Color Groups</router-link>
            </li>
          </ul>
        </collapse>
      </ul>
    </nav>
  </aside>
</template>

<script>
import ChorusLogo from "./ChorusLogo";
import Collapse from "@/components/Collapse";

// to do: abstract all of this
export default {
  name: "app-navigation",
  components: {
    ChorusLogo,
    Collapse
  },
};
</script>

<style>
.router-link-exact-active {
  font-weight: bold;
  background-color: #fdcb28;
}
</style>
