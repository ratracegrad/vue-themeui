<template>
    <section class="l-content">
        <h1>Color Palette</h1>
        <p>
            Each theme can have up to 6 brand colors. Each brand color has a
            main, faded, light, bright, and dark varient. Later, you'll group
            these colors together into modes.
        </p>

        <hr />

        <ColorCard
            v-for="card in cards"
            :key="card.id"
            :colorData="card.data"
            :colorID="card.id"
            v-on:delete="deleteColor"
        ></ColorCard>

        <div class="margin-lg">
            <res-button v-on:click="addColor" design="primary"
                ><res-icon name="add"></res-icon
                ><button>Add a color</button></res-button
            >
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

let colorCounter = 1;

export default {
    name: 'palette',
    data: function() {
        return {
            cards: [
                {
                    id: `color${colorCounter++}`,
                    data: {
                        main: '#FC6340',
                        faded: '#F7F3EF',
                        light: '#FF7E61',
                        bright: '#FFDBC2',
                        dark: '#E74F2D'
                    }
                }
            ]
        };
    },
    methods: {
        addColor: function() {
            let newColor = {
                id: `color${colorCounter++}`,
                data: {
                    main: '#FC6340',
                    faded: '#F7F3EF',
                    light: '#FF7E61',
                    bright: '#FFDBC2',
                    dark: '#E74F2D'
                }
            };
            this.cards.push(newColor);
        },
        deleteColor: function(colorID) {
            let newList = [];

            for (let i = 0; i < this.cards.length; i++) {
                if (this.cards[i].id !== colorID) {
                    newList.push(this.cards[i]);
                }
            }

            this.cards = newList;
        }
    },
    components: {
        PrevNext,
        ColorCard,
        NeutralsCard
    }
};
</script>

<style scoped></style>
