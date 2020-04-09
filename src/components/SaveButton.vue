<template>
    <div>
        <res-button
            :disabled="!enabled"
            design="primary"
            v-show="saveState === 'READY' || saveState === 'SAVED'"
            v-on:click="clickSave"
            ><button>Save</button></res-button
        >

        <res-button
            design="primary"
            v-show="saveState === 'CONFIRM'"
            v-on:click="clickConfirm"
            ><button>Confirm Save</button></res-button
        >
        <res-button
            negative=""
            v-show="saveState === 'CONFIRM'"
            v-on:click="clickCancel"
            ><res-icon name="x"></res-icon><button>Cancel</button></res-button
        >

        <res-button v-show="saveState === 'SAVED'"
            ><res-icon name="check"></res-icon
            ><button>Success!</button></res-button
        >
    </div>
</template>

<script>
export default {
    name: 'SaveButton',
    data: function() {
        return {
            saveState: 'READY'
        };
    },
    methods: {
        clickSave: function() {
            this.saveState = 'CONFIRM';
        },
        clickConfirm: function() {
            this.saveState = 'SAVED';
            this.$emit('save');
        },
        clickCancel: function() {
            this.saveState = 'READY';
        }
    },
    props: ['enabled'],
    watch: {
        enabled: function(val) {
            if (val) {
                this.saveState = 'READY';
            }
        }
    }
};
</script>
