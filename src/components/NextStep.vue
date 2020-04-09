<template>
    <v-toolbar color="transparent" flat>
        <v-btn color="primary" @click="$emit('setStep', nextStep)">
            Continue
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn outlined color="primary">Save</v-btn>
    </v-toolbar>
</template>

<script>
export default {
    name: "NextStep",
    props: {
        nextStep: {
            type: Number,
            required: true
        }
    }
};
</script>

<style scoped></style>
