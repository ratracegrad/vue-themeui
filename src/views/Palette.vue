<template>
    <section class="l-content">
        <h1>Color Palette</h1>
        <p>Each theme can have up to 6 brand colors. Each brand color has a main, faded, light, bright, and dark varient. Later, you'll group these colors together into modes.</p>

        <res-button design="primary" v-on:click="showForm = !showForm"><res-icon name="add"></res-icon><button>Add a color</button></res-button>

        <ColorForm v-if="showForm"></ColorForm>

        <hr />

        <h2>Colors</h2>

<!--         Should render a color card for each color added, and pass color data to that card
 -->        
 		<div class="flex">
 			<ColorCard></ColorCard>
 			<ColorCard></ColorCard>
 		</div>

    	<hr />
    	
    	<h2>Neutrals</h2>
        
        <hr />

        <PrevNext :prevLink="'spacing'" :nextLink="'ColorGroups'"></PrevNext>
    </section>
</template>

<script>
import PrevNext from '@/components/PrevNext';
import ColorForm from '@/components/ColorForm';
import ColorCard from '@/components/ColorCard';


export default {
    name: 'palette',
    data: function() {
        return {
            showForm: false
        };
    },
    components: {
        PrevNext,
        ColorForm,
        ColorCard
    }
};
</script>

<style scoped></style>
