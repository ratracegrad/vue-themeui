<template>
    <div class="c-panel">
        <h3>
            <span>{{ tab }} ({{ screenSize }})</span
            ><res-badge
                v-if="currentScale === tab"
                design="gold"
                size="smaller"
                style="vertical-align: middle; margin-left: 8px;"
                >selected</res-badge
            >
        </h3>
        <p class="margin-lg">
            The medium scale in Harmony is based on a minor third scale with a
            1.125 Base font size. Each step on the scale increases by TK TK. The
            mobile sizes are TK TK smaller.
        </p>

        <div class="margin-sm">
            <res-toggle-buttons>
                <res-button
                    value="1"
                    :active="screenSize === 'phone'"
                    @click="screenSize = 'phone'"
                >
                    <res-icon name="phone"></res-icon><button></button
                ></res-button>
                <res-button
                    value="2"
                    :active="screenSize === 'tablet'"
                    @click="screenSize = 'tablet'"
                >
                    <res-icon name="tablet"></res-icon><button></button
                ></res-button>
                <res-button
                    value="3"
                    :active="screenSize === 'desktop'"
                    @click="screenSize = 'desktop'"
                >
                    <res-icon name="desktop"></res-icon><button></button
                ></res-button>
            </res-toggle-buttons>
        </div>
        <res-table id="my-table">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Size (px)</th>
                        <th>Example</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(n, idx) in 12" :key="idx">
                        <td>size{{ n }}</td>
                        <td>
                            {{ getTextSize(screenSize, n) }}
                        </td>
                        <td
                            v-bind:style="{
                                fontSize: getTextSize(screenSize, n)
                            }"
                        >
                            {{ sizingText }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </res-table>

        <p style="text-align: right; margin-top: 8px;">
            <res-icon
                name="edit"
                size="small"
                style="vertical-align: middle;"
            ></res-icon>
            <router-link to="/EditTypeScale" style="text-decoration: none;"
                >Edit Scale</router-link
            >
        </p>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'SpacingCard',
    props: {
        tab: {
            type: String,
            required: true
        }
    },
    data: () => ({
        screenSize: 'phone'
    }),
    computed: {
        ...mapState({
            currentScale: state => state.currentScale,
            sizes: state => state.sizes,
            sizingText: state => state.sizingText
        })
    },
    methods: {
        getTextSize(size, n) {
            return this.sizes[this.currentScale][size][
                `font-size-${('00' + n).slice(-2)}`
            ];
        }
    }
};
</script>

<style scoped></style>
