<template>
    <section class="l-content">
        <h1>Color Palette</h1>
        <p>Each theme can have up to 6 brand colors. Each brand color has a main, faded, light, bright, and dark varient. Later, you'll group these colors together into modes.</p>

        <res-button design="primary"><res-icon name="add"></res-icon><button>Add a color</button></res-button>

        <div class="c-add-color-form">
        	<div class="margin-med"><res-input><label>Name</label> <input type="text" placeholder="name"> <span slot="help">Name this group of colors; This should be useful to you, and can be something like "Brand Color" or, simply, "Pink."</span></res-input></div>

        	<div class="flex align-center margin-sm col-50"><res-input><label>Main</label> <input type="text" placeholder="main"> </res-input><div class="c-color-picker bright"></div></div>

        	<div class="c-colors-form flex">

        		<div class="flex align-center margin-sm col-50"><res-input><label>Faded</label> <input type="text" placeholder="Faded"> </res-input><div class="c-color-picker faded"></div></div>

        		<div class="flex align-center margin-sm col-50"><res-input><label>Light</label> <input type="text" placeholder="Light"> </res-input><div class="c-color-picker light"></div></div>

        	</div>

        	<div class="c-colors-form flex margin-med">

        		<div class="flex align-center margin-sm col-50"><res-input><label>Bright</label> <input type="text" placeholder="Bright"> </res-input><div class="c-color-picker bright"></div></div>

        		<div class="flex align-center margin-sm col-50"><res-input><label>Dark</label> <input type="text" placeholder="Dark"> </res-input><div class="c-color-picker dark"></div></div>

        	</div>

        	<div><res-button design="secondary"><button>Save Color</button></res-button></div>


        	


    	</div>
        <hr />

        <h2>Colors</h2>

        <div style="width: 300px; border: 1px solid #e0e0e0; padding: 10px">
        <h3>Orange</h3>
        <div style="width: 100%; background-color: #FC6340; padding: 5px; color: #fff">Main #FC6340 </div>
        <div style="width: 100%; background-color: #F7F3EF; padding: 5px; color: #000">Faded #F7F3EF</div>
        <div style="width: 100%; background-color: #FFDBC2; padding: 5px; color: #000">Light #FFDBC2 </div>
        <div style="width: 100%; background-color: #FF7E61; padding: 5px; color: #fff">Bright #FF7E61  </div>
        <div style="width: 100%; background-color: #E74F2D; padding: 5px; color: #fff">Dark #E74F2D </div>
        <p style="text-align: right; margin-top: 8px;">
            <res-icon
                name="edit"
                size="small"
                style="vertical-align: middle;"
            ></res-icon>
            <router-link
                to="/"
                style="text-decoration: none;"
                >Edit</router-link
            >
        </p>
    	</div>

    	<hr />
    	
    	<h2>Neutrals</h2>
        
        <hr />

        <PrevNext :prevLink="'spacing'" :nextLink="'ColorGroups'"></PrevNext>
    </section>
</template>

<script>
import PrevNext from '@/components/PrevNext';

export default {
    name: 'palette',
    components: {
        PrevNext
    }
};
</script>

<style scoped></style>
