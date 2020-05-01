<template>
    <section class="l-content">
        <h2>Assign your typography</h2>
        <p>These broad font categories define your theme's typography</p>
        <div class="c-panel">
            <res-select
                ><label
                    >Headings
                    <p>
                        Currently: <strong>{{ categories.headings }}</strong>
                    </p></label
                >
                <select name="s1" v-model="headings" id="initial-id1"
                    ><option placeholder="">Select font</option
                    ><option value="Graphik-Regular">Graphik-Regular</option
                    ><option value="Graphik-Bold">Graphik-Bold</option
                    ><option value="Lora-Regular">Lora-Regular</option
                    ><option value="Lora-Bold">Lora-Bold</option></select
                ></res-select
            >

            <hr />

            <res-select
                ><label
                    >Body
                    <p>
                        Currently: <strong>{{ categories.body }}</strong>
                    </p></label
                >
                <select name="s1" v-model="body" id="initial-id2"
                    ><option placeholder="">Select font</option
                    ><option value="Graphik-Regular">Graphik-Regular</option
                    ><option value="Graphik-Bold">Graphik-Bold</option
                    ><option value="Lora-Regular">Lora-Regular</option
                    ><option value="Lora-Bold">Lora-Bold</option></select
                ></res-select
            >

            <hr />

            <res-select
                ><label
                    >Meta
                    <p>
                        Currently: <strong>{{ categories.meta }}</strong>
                    </p></label
                >
                <select name="s1" v-model="meta" id="initial-id3"
                    ><option placeholder="">Select font</option
                    ><option value="Graphik-Regular">Graphik-Regular</option
                    ><option value="Graphik-Bold">Graphik-Bold</option
                    ><option value="Lora-Regular">Lora-Regular</option
                    ><option value="Lora-Bold">Lora-Bold</option></select
                ></res-select
            >

            <hr />

            <res-select
                ><label
                    >UI
                    <p>
                        Currently: <strong>{{ categories.UI }}</strong>
                    </p></label
                >
                <select name="s1" id="initial-id4" v-model="UI"
                    ><option placeholder="">Select font</option
                    ><option value="Graphik-Regular">Graphik-Regular</option
                    ><option value="Graphik-Bold">Graphik-Bold</option
                    ><option value="Lora-Regular">Lora-Regular</option
                    ><option value="Lora-Bold">Lora-Bold</option></select
                ></res-select
            >
        </div>

        <SaveButton :enabled="true" v-on:save="handleSave"></SaveButton>

        <PrevNext :prevLink="'typography'" :nextLink="'headings'"></PrevNext>
    </section>
</template>

<script>
import SaveButton from '@/components/SaveButton';
import PrevNext from '@/components/PrevNext';
import { mapState } from 'vuex';

export default {
    name: 'Categories',
    components: {
        SaveButton,
        PrevNext
    },
    data: () => ({
        headings: '',
        body: '',
        meta: '',
        UI: ''
    }),
    computed: {
        ...mapState({
            categories: state => state.categories
        })
    },
    methods: {
        handleSave() {
            this.$store.commit('saveCategories', {
                headings: this.headings,
                body: this.body,
                meta: this.meta,
                UI: this.UI
            });
        }
    }
};
</script>

<style scoped></style>
