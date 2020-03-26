<template>
  <v-app>
    <v-stepper v-model="e1">
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Intro</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">Fonts</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 3" step="3"
          >Type Categories</v-stepper-step
        >

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 4" step="4">Typography</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 5" step="5">Type Sizing</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 6" step="6">Spacing</v-stepper-step>
      </v-stepper-header>

      <v-stepper-items>
        <v-stepper-content step="1">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
          <v-toolbar color="transparent" flat>
            <v-btn color="primary" @click="e1 = 2">
              Continue
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn outlined color="primary">Save</v-btn>
          </v-toolbar>
        </v-stepper-content>

        <v-stepper-content step="2">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
          <v-toolbar color="transparent" flat>
            <v-btn color="primary" @click="e1 = 3">
              Continue
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn outlined color="primary">Save</v-btn>
          </v-toolbar>
        </v-stepper-content>

        <v-stepper-content step="3">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
          <v-toolbar color="transparent" flat>
            <v-btn color="primary" @click="e1 = 4">
              Continue
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn outlined color="primary">Save</v-btn>
          </v-toolbar>
        </v-stepper-content>

        <v-stepper-content step="4">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
          <v-toolbar color="transparent" flat>
            <v-btn color="primary" @click="e1 = 5">
              Continue
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn outlined color="primary">Save</v-btn>
          </v-toolbar>
        </v-stepper-content>

        <v-stepper-content step="5">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
          <v-toolbar color="transparent" flat>
            <v-btn color="primary" @click="e1 = 6">
              Continue
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn outlined color="primary">Save</v-btn>
          </v-toolbar>
        </v-stepper-content>

        <v-stepper-content step="6">
          <v-card class="mb-12" color="grey lighten-1" height="200px"></v-card>
          <v-toolbar color="transparent" flat>
            <v-btn color="primary" @click="e1 = 1">
              Continue
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn outlined color="primary">Save</v-btn>
          </v-toolbar>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-app>
</template>

<script>
export default {
  name: "Menu2",
  data() {
    return {
      e1: 1
    };
  }
};
</script>

<style scoped></style>
