<template>
  <v-app>
    <v-stepper alt-labels v-model="e1">
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
          <Intro></Intro>
          <ContinueButton
            v-bind:nextStep="2"
            v-on:setStep="setThisStep"
          ></ContinueButton>
        </v-stepper-content>

        <v-stepper-content step="2">
          <Fonts></Fonts>
          <ContinueButton
            v-bind:nextStep="3"
            v-on:setStep="setThisStep"
          ></ContinueButton>
        </v-stepper-content>

        <v-stepper-content step="3">
          <Categories></Categories>
          <ContinueButton
            v-bind:nextStep="4"
            v-on:setStep="setThisStep"
          ></ContinueButton>
        </v-stepper-content>

        <v-stepper-content step="4">
          <Typography></Typography>
          <ContinueButton
            v-bind:nextStep="5"
            v-on:setStep="setThisStep"
          ></ContinueButton>
        </v-stepper-content>

        <v-stepper-content step="5">
          <Sizing></Sizing>
          <ContinueButton
            v-bind:nextStep="6"
            v-on:setStep="setThisStep"
          ></ContinueButton>
        </v-stepper-content>

        <v-stepper-content step="6">
          <Spacing></Spacing>
          <ContinueButton
            v-bind:nextStep="1"
            v-on:setStep="setThisStep"
          ></ContinueButton>
        </v-stepper-content>
      </v-stepper-items>
    </v-stepper>
  </v-app>
</template>

<script>
import Intro from "@/components/Intro";
import Fonts from "@/components/Fonts";
import Categories from "@/components/Categories";
import Typography from "@/components/Typography";
import Sizing from "@/components/Sizing";
import Spacing from "@/components/Spacing";
import ContinueButton from "@/components/NextStep";

export default {
  name: "Menu2",
  data() {
    return {
      e1: 1
    };
  },
  components: {
    Intro,
    Fonts,
    Categories,
    Typography,
    Sizing,
    Spacing,
    ContinueButton
  },
  methods: {
    setThisStep(step) {
      // console.log(`step: ${evt}`)
      this.e1 = step;
    }
  }
};
</script>

<style scoped></style>
