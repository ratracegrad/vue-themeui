<template>
  <v-app>
    <v-navigation-drawer disable-resize-watcher app v-model="drawer" class="hidden-md-and-up">
      <v-list dense>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Get Started</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Fonts</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Type Categories</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Typeography</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Type Sizing</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Spacing</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer app clipped v-model="drawerLarge" class="hidden-sm-and-down ">
      <v-list dense>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Get Started</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Fonts</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Type Categories</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Typeography</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Type Sizing</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title>Spacing</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar  app flat dark>
      <ChorusLogoWhite></ChorusLogoWhite>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="8">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-spacer></v-spacer>
                <v-toolbar-title>Alternate Menu</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <p class="subtitle-1">This shows having a menu on side that disappears on smaller
                screens and hamburger menu appears. Clicking on hamburger
                  menu shows a slide-in sidebar.</p>
                <p class="subtitle-1">Resize the screen to see this in action.</p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ChorusLogoWhite from "../components/ChorusLogoWhite";

export default {
  name: "Menu1",
  components: {
    ChorusLogoWhite
  },
  data: () => ({
    drawer: false,
    drawerLarge: null
  })
};
</script>

<style scoped></style>
