<template>
    <section class="l-content-colors">
        <h1>Color Palette</h1>
        <p>
            Each theme can have up to 6 brand colors. Each brand color has a
            main, faded, light, bright, and dark varient. Later, you'll group
            these colors together into modes.
        </p>

        <p>
            Your primary color informs the default colors in your system, and
            should be your "brand" color. Don't worry, you'll be able to use
            other colors later, as you set up modes and components. This will
            just be used as a default so you don't have to specify everything.
        </p>

        <p
            style="margin-bottom: 6px !important;
    font-weight: bold;"
        >
            Primary Color
        </p>
        <div class="flex">
            <res-select style="margin-right: 10px;"
                ><select name="s1" id="initial-id" v-model="selectedColor"
                    ><option placeholder="">Primary Color</option
                    ><option
                        v-for="card in cards"
                        :value="card.id"
                        :key="card.id"
                        >{{ card.id }}</option
                    ></select
                ></res-select
            >

            <res-button
                :disabled="selectedColor === savedPrimaryColor"
                design="secondary"
                v-on:click="setPrimary"
                ><button>Set</button></res-button
            >
        </div>

        <hr />

        <ColorCard
            v-for="card in cards"
            :key="card.id"
            :colorData="card.data"
            :colorID="card.id"
            :isPrimaryColor="savedPrimaryColor === card.id"
            v-on:delete="deleteColor"
        ></ColorCard>

        <div class="margin-lg">
            <res-button
                v-click-outside="hide"
                @click="toggle"
                design="default"
                v-show="!opened"
                ><res-icon name="add"></res-icon
                ><button>Add a color</button></res-button
            >
            <res-button v-show="opened" v-on:click="addColor" design="secondary"
                ><button>Generate color</button></res-button
            >
            <v-color-picker
                v-show="opened"
                width="275"
                @update:color="pickColor"
                id="picker--generate-color"
            ></v-color-picker>
        </div>
        <hr />

        <h2>Neutrals</h2>
        <NeutralsCard></NeutralsCard>

        <hr />

        <PrevNext :prevLink="'spacing'" :nextLink="'ColorGroups'"></PrevNext>
    </section>
</template>

<script>
import PrevNext from '@/components/PrevNext';
import ColorCard from '@/components/ColorCard';
import NeutralsCard from '@/components/NeutralsCard';
import colorConvert from 'color-convert';
import clickOutside from 'vue-click-outside';

let colorCounter = 1;

export default {
    name: 'palette',
    components: {
        PrevNext,
        ColorCard,
        NeutralsCard
    },
    directives: {
        clickOutside
    },
    data: function() {
        return {
            opened: false,
            isHiddenPicker: true,
            newColor: '',
            newColorFaded: '',
            newColorLight: '',
            newColorBright: '',
            newColorDark: '',
            selectedColor: 'color1',
            savedPrimaryColor: 'color1',
            cards: [
                {
                    id: `color${colorCounter++}`,
                    data: {
                        main: '#FC6340',
                        faded: '#F7F3EF',
                        light: '#FFDBC2',
                        bright: '#FF7E61',
                        dark: '#E74F2D'
                    }
                }
            ]
        };
    },
    mounted() {
        // prevent click outside event with popupItem.
        this.popupItem = document.getElementById('picker--generate-color');
    },
    methods: {
        toggle() {
            this.opened = true;
        },
        hide() {
            this.opened = false;
        },
        addColor: function() {
            let newColor = {
                id: `color${colorCounter++}`,
                data: {
                    main: this.newColor,
                    faded: this.newColorFaded,
                    light: this.newColorLight,
                    bright: this.newColorBright,
                    dark: this.newColorDark
                }
            };
            this.cards.push(newColor);
            this.isHiddenPicker = true;
        },
        setPrimary: function() {
            this.savedPrimaryColor = this.selectedColor;
            console.log(this.savedPrimaryColor);
        },
        deleteColor: function(colorID) {
            let newList = [];

            for (let i = 0; i < this.cards.length; i++) {
                if (this.cards.length === 1) {
                    alert(
                        "You must have at least one color in your palette, you can't delete this one!"
                    );
                    return;
                }
                if (this.cards[i].id !== colorID) {
                    newList.push(this.cards[i]);
                }
            }

            this.cards = newList;
        },
        pickColor: function(color) {
            this.newColor = color.hex;

            var newColorHSL = colorConvert.hex.hsl(this.newColor);
            var newColorHue = newColorHSL[0];

            // generate faded

            var createFadedColorHex = function() {
                var newFadedColorHSL = [];

                var FADED_COLOR_SATURATION = 20;
                var FADED_COLOR_LIGHTNESS = 95;

                newFadedColorHSL.push(
                    newColorHue,
                    FADED_COLOR_SATURATION,
                    FADED_COLOR_LIGHTNESS
                );

                return '#' + colorConvert.hsl.hex(newFadedColorHSL);
            };

            this.newColorFaded = createFadedColorHex();

            // generate light

            var createLightColorHex = function() {
                var newLightColorHSL = [];

                var LIGHT_COLOR_SATURATION = 50;
                var LIGHT_COLOR_LIGHTNESS = 85;

                newLightColorHSL.push(
                    newColorHue,
                    LIGHT_COLOR_SATURATION,
                    LIGHT_COLOR_LIGHTNESS
                );

                return '#' + colorConvert.hsl.hex(newLightColorHSL);
            };

            this.newColorLight = createLightColorHex();

            // generate bright

            var createBrightColorHex = function() {
                var newBrightColorHSL = [];

                var BRIGHT_COLOR_SATURATION = 80;
                var BRIGHT_COLOR_LIGHTNESS = 50;

                newBrightColorHSL.push(
                    newColorHue,
                    BRIGHT_COLOR_SATURATION,
                    BRIGHT_COLOR_LIGHTNESS
                );

                return '#' + colorConvert.hsl.hex(newBrightColorHSL);
            };

            this.newColorBright = createBrightColorHex();

            // generate dark

            var createDarkColorHex = function() {
                var newDarkColorHSL = [];

                var DARK_COLOR_SATURATION = 50;
                var DARK_COLOR_LIGHTNESS = 50;

                newDarkColorHSL.push(
                    newColorHue,
                    DARK_COLOR_SATURATION,
                    DARK_COLOR_LIGHTNESS
                );

                return '#' + colorConvert.hsl.hex(newDarkColorHSL);
            };

            this.newColorDark = createDarkColorHex();
        }
    }
};
</script>

<style scoped></style>
