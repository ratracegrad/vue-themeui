<template>
    <div class="flex align-center">
        <button
            @click="toggle"
            v-click-outside="hide"
            class="c-show-picker"
            v-bind:style="{ backgroundColor: selectedColor }"
        ></button>
        <v-color-picker
            v-show="opened"
            width="250"
            id="picker"
            :value="value"
            @input="updateColorValue"
        ></v-color-picker>
    </div>
</template>

<script>
import clickOutside from 'vue-click-outside';

export default {
    name: 'ColorPicker',
    directives: {
        clickOutside
    },
    props: ['value'],
    data() {
        return {
            opened: false,
            selectedColor: ''
        };
    },
    mounted() {
        // prevent click outside event with popupItem.
        this.popupItem = this.$el;
        this.selectedColor = this.value;
    },
    methods: {
        toggle() {
            this.opened = true;
        },
        hide() {
            this.opened = false;
        },
        updateColorValue(e) {
            this.$emit('input', e);
            this.selectedColor = e;
        }
    }
};
</script>
