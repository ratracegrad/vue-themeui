<template>
    <div class="c-add-color-form">
        <div class="margin-med"><res-input><label>Name</label> <input type="text" placeholder="name"> <span slot="help">Name this group of colors; This should be useful to you, and can be something like "Brand Color" or, simply, "Pink."</span></res-input></div>

        <div class="flex align-center margin-sm col-50"><res-input><label>Main</label> <input type="text" placeholder="main"> </res-input><div class="c-color-picker main"></div></div>

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
</template>

<script>
export default {
    name: 'ColorForm',
    
};
</script>