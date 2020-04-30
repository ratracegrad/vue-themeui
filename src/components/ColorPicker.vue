<template>
    <div>
        <button
            v-on:click="isHidden = !isHidden"
            class="c-show-picker"
        ></button>
        <v-color-picker v-model="color" v-if="!isHidden"></v-color-picker>
    </div>
</template>

<script>
export default {
    name: 'ColorPicker',
    data() {
        return {
            isHidden: true
        };
    }
};
</script>

<style scoped>
.c-show-picker {
    width: 15px;
    height: 15px;
    margin-left: 10px;
    border: 1px solid #fff;
    border-radius: 20%;
    background-color: #fc6340;
}
</style>
