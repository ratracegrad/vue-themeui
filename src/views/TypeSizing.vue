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
                    <div class="c-panel">
                        <h3>
                            <span>Small ({{ smallScreenSize }})</span
                            ><res-badge
                                v-if="currentScale === 'small'"
                                design="gold"
                                size="smaller"
                                style="vertical-align: middle; margin-left: 8px;"
                                >selected</res-badge
                            >
                        </h3>
                        <p class="margin-lg">
                            The small scale in Harmony is based on a minor third
                            scale with a 1.125 Base font size. Each step on the
                            scale increases by TK TK. The mobile sizes are TK TK
                            smaller.
                        </p>

                        <div class="margin-sm">
                            <res-toggle-buttons>
                                <res-button
                                    value="1"
                                    :active="smallScreenSize === 'phone'"
                                    @click="smallScreenSize = 'phone'"
                                >
                                    <res-icon name="phone"></res-icon
                                    ><button></button
                                ></res-button>
                                <res-button
                                    value="2"
                                    :active="smallScreenSize === 'tablet'"
                                    @click="smallScreenSize = 'tablet'"
                                >
                                    <res-icon name="tablet"></res-icon
                                    ><button></button
                                ></res-button>
                                <res-button
                                    value="3"
                                    :active="smallScreenSize === 'desktop'"
                                    @click="smallScreenSize = 'desktop'"
                                >
                                    <res-icon name="desktop"></res-icon
                                    ><button></button
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
                                            {{
                                                getTextSize(smallScreenSize, n)
                                            }}
                                        </td>
                                        <td
                                            v-bind:style="{
                                                fontSize: getTextSize(
                                                    smallScreenSize,
                                                    n
                                                )
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
                            <router-link
                                to="/EditTypeScale"
                                style="text-decoration: none;"
                                >Edit Scale</router-link
                            >
                        </p>
                    </div>
                </v-tab-item>
                <v-tab-item transition="none" reverse-transition="none">
                    <div class="c-panel">
                        <h3>
                            <span>Medium ({{ mediumScreenSize }})</span
                            ><res-badge
                                v-if="currentScale === 'medium'"
                                design="gold"
                                size="smaller"
                                style="vertical-align: middle; margin-left: 8px;"
                                >selected</res-badge
                            >
                        </h3>
                        <p class="margin-lg">
                            The medium scale in Harmony is based on a minor
                            third scale with a 1.125 Base font size. Each step
                            on the scale increases by TK TK. The mobile sizes
                            are TK TK smaller.
                        </p>

                        <div class="margin-sm">
                            <res-toggle-buttons>
                                <res-button
                                    value="1"
                                    :active="mediumScreenSize === 'phone'"
                                    @click="mediumScreenSize = 'phone'"
                                >
                                    <res-icon name="phone"></res-icon
                                    ><button></button
                                ></res-button>
                                <res-button
                                    value="2"
                                    :active="mediumScreenSize === 'tablet'"
                                    @click="mediumScreenSize = 'tablet'"
                                >
                                    <res-icon name="tablet"></res-icon
                                    ><button></button
                                ></res-button>
                                <res-button
                                    value="3"
                                    :active="mediumScreenSize === 'desktop'"
                                    @click="mediumScreenSize = 'desktop'"
                                >
                                    <res-icon name="desktop"></res-icon
                                    ><button></button
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
                                            {{
                                                getTextSize(mediumScreenSize, n)
                                            }}
                                        </td>
                                        <td
                                            v-bind:style="{
                                                fontSize: getTextSize(
                                                    mediumScreenSize,
                                                    n
                                                )
                                            }"
                                        >
                                            {{ sizingText }}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <!--                            <table>-->
                            <!--                                <thead>-->
                            <!--                                    <tr>-->
                            <!--                                        <th>Name</th>-->
                            <!--                                        <th>Size (px)</th>-->
                            <!--                                        <th>Example</th>-->
                            <!--                                    </tr>-->
                            <!--                                </thead>-->
                            <!--                                <tbody>-->
                            <!--                                    <tr>-->
                            <!--                                        <td>size1</td>-->
                            <!--                                        <td>6px</td>-->
                            <!--                                        <td style="font-size: 6px;">-->
                            <!--                                            {{ sizingText }}-->
                            <!--                                        </td>-->
                            <!--                                    </tr>-->
                            <!--                                    <tr>-->
                            <!--                                        <td>size2</td>-->
                            <!--                                        <td>8px</td>-->
                            <!--                                        <td style="font-size: 8px;">-->
                            <!--                                            {{ sizingText }}-->
                            <!--                                        </td>-->
                            <!--                                    </tr>-->
                            <!--                                    <tr>-->
                            <!--                                        <td>size3</td>-->
                            <!--                                        <td>10px</td>-->
                            <!--                                        <td style="font-size: 10px;">-->
                            <!--                                            {{ sizingText }}-->
                            <!--                                        </td>-->
                            <!--                                    </tr>-->
                            <!--                                    <tr>-->
                            <!--                                        <td>size4</td>-->
                            <!--                                        <td>12px</td>-->
                            <!--                                        <td style="font-size: 12px;">-->
                            <!--                                            {{ sizingText }}-->
                            <!--                                        </td>-->
                            <!--                                    </tr>-->
                            <!--                                    <tr>-->
                            <!--                                        <td>size5</td>-->
                            <!--                                        <td>14px</td>-->
                            <!--                                        <td style="font-size: 14px;">-->
                            <!--                                            {{ sizingText }}-->
                            <!--                                        </td>-->
                            <!--                                    </tr>-->
                            <!--                                    <tr>-->
                            <!--                                        <td>size6</td>-->
                            <!--                                        <td>16px</td>-->
                            <!--                                        <td style="font-size: 16px;">-->
                            <!--                                            {{ sizingText }}-->
                            <!--                                        </td>-->
                            <!--                                    </tr>-->
                            <!--                                    <tr>-->
                            <!--                                        <td>size7</td>-->
                            <!--                                        <td>18px</td>-->
                            <!--                                        <td style="font-size: 18px;">-->
                            <!--                                            {{ sizingText }}-->
                            <!--                                        </td>-->
                            <!--                                    </tr>-->
                            <!--                                    <tr>-->
                            <!--                                        <td>size8</td>-->
                            <!--                                        <td>24px</td>-->
                            <!--                                        <td style="font-size: 24px;">-->
                            <!--                                            {{ sizingText }}-->
                            <!--                                        </td>-->
                            <!--                                    </tr>-->
                            <!--                                    <tr>-->
                            <!--                                        <td>size9</td>-->
                            <!--                                        <td>32px</td>-->
                            <!--                                        <td style="font-size: 32px;">-->
                            <!--                                            {{ sizingText }}-->
                            <!--                                        </td>-->
                            <!--                                    </tr>-->
                            <!--                                    <tr>-->
                            <!--                                        <td>size10</td>-->
                            <!--                                        <td>44px</td>-->
                            <!--                                        <td style="font-size: 44px;">-->
                            <!--                                            {{ sizingText }}-->
                            <!--                                        </td>-->
                            <!--                                    </tr>-->
                            <!--                                    <tr>-->
                            <!--                                        <td>size11</td>-->
                            <!--                                        <td>52px</td>-->
                            <!--                                        <td style="font-size: 52px;">-->
                            <!--                                            {{ sizingText }}-->
                            <!--                                        </td>-->
                            <!--                                    </tr>-->
                            <!--                                    <tr>-->
                            <!--                                        <td>size12</td>-->
                            <!--                                        <td>64px</td>-->
                            <!--                                        <td style="font-size: 64px;">-->
                            <!--                                            {{ sizingText }}-->
                            <!--                                        </td>-->
                            <!--                                    </tr>-->
                            <!--                                </tbody>-->
                            <!--                            </table>-->
                        </res-table>

                        <p style="text-align: right; margin-top: 8px;">
                            <res-icon
                                name="edit"
                                size="small"
                                style="vertical-align: middle;"
                            ></res-icon>
                            <router-link
                                to="/EditTypeScale"
                                style="text-decoration: none;"
                                >Edit Scale</router-link
                            >
                        </p>
                    </div>
                </v-tab-item>
                <v-tab-item transition="none" reverse-transition="none">
                    <div class="c-panel">
                        <h3>
                            <span>Large ({{ largeScreenSize }})</span
                            ><res-badge
                                v-if="currentScale === 'large'"
                                design="gold"
                                size="smaller"
                                style="vertical-align: middle; margin-left: 8px;"
                                >selected</res-badge
                            >
                        </h3>
                        <p class="margin-lg">
                            The large scale in Harmony is based on a minor third
                            scale with a 1.125 Base font size. Each step on the
                            scale increases by TK TK. The mobile sizes are TK TK
                            smaller.
                        </p>
                        <div class="margin-sm">
                            <res-toggle-buttons>
                                <res-button
                                    value="1"
                                    :active="largeScreenSize === 'phone'"
                                    @click="largeScreenSize = 'phone'"
                                >
                                    <res-icon name="phone"></res-icon
                                    ><button></button
                                ></res-button>
                                <res-button
                                    value="2"
                                    :active="largeScreenSize === 'tablet'"
                                    @click="largeScreenSize = 'tablet'"
                                >
                                    <res-icon name="tablet"></res-icon
                                    ><button></button
                                ></res-button>
                                <res-button
                                    value="3"
                                    :active="largeScreenSize === 'desktop'"
                                    @click="largeScreenSize = 'desktop'"
                                >
                                    <res-icon name="desktop"></res-icon
                                    ><button></button
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
                                            {{
                                                getTextSize(largeScreenSize, n)
                                            }}
                                        </td>
                                        <td
                                            v-bind:style="{
                                                fontSize: getTextSize(
                                                    largeScreenSize,
                                                    n
                                                )
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
                            <router-link
                                to="/EditTypeScale"
                                style="text-decoration: none;"
                                >Edit Scale</router-link
                            >
                        </p>
                    </div>
                </v-tab-item>
            </v-tabs-items>
        </v-tabs>

        <PrevNext :prevLink="'fonts'" :nextLink="'typography'"></PrevNext>
    </section>
</template>

<script>
import PrevNext from '@/components/PrevNext';
import { mapState } from 'vuex';

export default {
    name: 'TypeSizing',
    components: {
        PrevNext
    },
    data: () => ({
        tab: null,
        selectedScale: '',
        smallScreenSize: 'phone',
        mediumScreenSize: 'phone',
        largeScreenSize: 'phone'
    }),
    computed: {
        ...mapState({
            currentScale: state => state.currentScale,
            sizes: state => state.sizes,
            sizingText: state => state.sizingText
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
        },
        getTextSize(size, n) {
            return this.sizes[this.currentScale][size][
                `font-size-${('00' + n).slice(-2)}`
            ];
        }
    }
};
</script>

<style scoped></style>
