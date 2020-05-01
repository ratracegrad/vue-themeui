<template>
    <section class="l-content">
        <h2>Choose your type sizing</h2>

        <div>
            <p>
                Scales affect your typography ttktktktktk. Scale choice is
                important because blah blah blah. Learn about scale options
                below. Let's describe the breakpoint stuff too.
            </p>
        </div>
        <p>
            Current scale: <strong>{{ currentScale }}</strong>
        </p>

        <div class="flex-center margin-lg">
            <res-select style="margin-right: 8px;">
                <select name="s1" id="initial-id" v-model="selectedScale">
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
        <p class="margin-lg">preview scales below tktkt</p>

        <hr />

        <div class="tabs">
            <div class="tab is-tab-selected"></div>
        </div>

        <v-tabs v-model="tab">
            <v-tab>
                Small
            </v-tab>
            <v-tab>
                Medium
            </v-tab>
            <v-tab>
                Large
            </v-tab>

            <v-tabs-items v-model="tab">
                <v-tab-item transition="none" reverse-transition="none">
                    <SpacingCard tab="small"></SpacingCard>
                </v-tab-item>
                <v-tab-item transition="none" reverse-transition="none">
                    <SpacingCard tab="medium"></SpacingCard>
                </v-tab-item>
                <v-tab-item transition="none" reverse-transition="none">
                    <SpacingCard tab="large"></SpacingCard>
                </v-tab-item>
            </v-tabs-items>
        </v-tabs>

        <PrevNext :prevLink="'fonts'" :nextLink="'typography'"></PrevNext>
    </section>
</template>

<script>
import PrevNext from '@/components/PrevNext';
import SpacingCard from '../components/SpacingCard';
import { mapState } from 'vuex';

export default {
    name: 'TypeSizing',
    components: {
        PrevNext,
        SpacingCard
    },
    data: () => ({
        tab: null,
        selectedScale: ''
    }),
    computed: {
        ...mapState({
            currentScale: state => state.currentScale,
            sizes: state => state.sizes
        })
    },
    methods: {
        saveCurrentScale() {
            this.$store.commit('saveCurrentScale', this.selectedScale);
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
