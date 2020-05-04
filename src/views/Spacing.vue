<template>
    <section class="l-content">
        <h2>Choose your spacing scale</h2>
        <div>
            <p>How spacing and sizing works in harmony tkktktktktkt.</p>
            <p>
                Use a small scale for smaller space between elements, medium for
                medium, and large for large tktk. We recommend starting with a
                medium scale. That's the default. You can preview scales below.
            </p>
        </div>
        <p>
            Currently set to: <strong>{{ currentScale }}</strong>
        </p>
        <div class="flex-center margin-lg">
            <res-select style="margin-right: 8px;">
                <select v-model="selectedScale">
                    <option value="" selected disabled>Select scale</option>
                    <option v-for="(value, key) in sizes" :key="key">{{
                        key
                    }}</option>
                </select>
            </res-select>
            <res-button design="primary" @click="saveCurrentScale"
                ><button>Save</button></res-button
            >
        </div>
        <hr />

        <v-tabs v-model="tab">
            <v-tab v-for="(scale, scaleIdx) in scaleOptions" :key="scaleIdx">{{
                scale
            }}</v-tab>

            <v-tabs-items v-model="tab">
                <v-tab-item transition="none" reverse-transition="none">
                    <SpacingScale tab="small"></SpacingScale>
                </v-tab-item>
                <v-tab-item transition="none" reverse-transition="none">
                    <SpacingScale tab="medium"></SpacingScale>
                </v-tab-item>
                <v-tab-item transition="none" reverse-transition="none">
                    <SpacingScale tab="large"></SpacingScale>
                </v-tab-item>
            </v-tabs-items>
        </v-tabs>

        <PrevNext :prevLink="'categories'" :nextLink="'palette'"></PrevNext>
    </section>
</template>

<script>
import PrevNext from '@/components/PrevNext';
import SpacingScale from '../components/SpacingScale';
import { mapState } from 'vuex';

export default {
    name: 'Spacing',
    components: {
        PrevNext,
        SpacingScale
    },
    data: () => ({
        selectedScale: '',
        tab: null
    }),
    computed: {
        ...mapState({
            currentScale: state => state.spacingCurrentScale,
            scaleOptions: state => state.spacingScaleOptions,
            sizes: state => state.sizes
        })
    },
    methods: {
        saveCurrentScale() {
            this.$store.commit('saveSpacingScale', this.selectedScale);
            this.tab =
                this.selectedScale === 'small'
                    ? 0
                    : this.selectedScale === 'medium'
                    ? 1
                    : 2;
        }
    }
};
</script>

<style scoped></style>
