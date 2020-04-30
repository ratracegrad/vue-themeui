import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        fonts: {},
        sizes: {},
        characterSpacing: {},
        categories: {},
        headings: {},
        body: {},
        meta: {},
        UI: {},
        spacing: {},
        palette: {},
        colorGroups: {}
    },
    mutations: {
        saveFonts(state, bundle) {
            this.state.fonts = bundle;
        },
        saveSizes(state, bundle) {
            this.state.sizes = bundle;
        },
        saveCharacterSpacing(state, bundle) {
            this.state.characterSpacing = bundle;
        },
        saveCategories(state, bundle) {
            this.state.categories = bundle;
        },
        saveHeadings(state, bundle) {
            this.state.headings = bundle;
        },
        saveBody(state, bundle) {
            this.state.body = bundle;
        },
        saveMeta(state, bundle) {
            this.state.meta = bundle;
        },
        saveUI(state, bundle) {
            this.state.UI = bundle;
        },
        saveSpacing(state, bundle) {
            this.state.spacing = bundle;
        },
        savePalette(state, bundle) {
            this.state.palette = bundle;
        },
        saveColorGroups(state, bundle) {
            this.state.colorGroups = bundle;
        }
    },
    actions: {},
    modules: {}
});
