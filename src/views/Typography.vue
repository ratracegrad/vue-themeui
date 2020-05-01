<template>
    <section class="l-content l-content-typography">
        <h1>Character Spacing</h1>
        <p>
            Set the values associated with your chosen fonts. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate.
        </p>
        <div class="c-tab-nav margin-lg">
            <p class="margin-reset">
                <span class="c-jump">Jump to:</span>
                <span class="c-jump"><a href="#graphik">Graphik</a></span>
                <span class="c-jump lora-regular"
                    ><a href="#lora">Lora</a></span
                >
            </p>
        </div>
        <hr />
        <div class="c-panel c-panel-typography" id="graphik">
            <h2 class="margin-lg line-height-reset">
                Graphik <span class="type-regular">Regular, Bold</span>
            </h2>

            <div class="flex margin-lg">
                <div class="col-20">
                    <h5 class="margin-xxs">
                        Line Height
                    </h5>
                    <p>Set four contexts</p>
                </div>
                <div class="col-80">
                    <div class="flex margin-lg">
                        <div class="flex align-base col-25">
                            <div class="flex c-typography-form">
                                <label>Tight</label>
                                <res-input
                                    ><input
                                        type="text"
                                        :placeholder="lineHeight.tight"
                                        v-model="lineHeight.tight"
                                /></res-input>
                            </div>
                        </div>
                        <span
                            class="col-75"
                            style="font-size:44px; font-weight: bold;"
                            v-bind:style="{ lineHeight: lineHeight.tight }"
                            >Tight applies to larger font sizes, like those used
                            in headlines</span
                        >
                    </div>

                    <div class="flex margin-lg">
                        <div class="flex align-base col-25">
                            <div class="flex c-typography-form">
                                <label>Medium</label>
                                <res-input
                                    ><input
                                        type="text"
                                        :placeholder="lineHeight.medium"
                                        v-model="lineHeight.medium"
                                /></res-input>
                            </div>
                        </div>
                        <span
                            class="col-75"
                            style="font-size:16px;"
                            v-bind:style="{ lineHeight: lineHeight.medium }"
                            >This line height applies to medium font sizes.
                            Here's some sample text for you to test this value.
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.</span
                        >
                    </div>

                    <div class="flex margin-lg">
                        <div class="flex align-base col-25">
                            <div class="flex c-typography-form">
                                <label>Loose</label>
                                <res-input
                                    ><input
                                        type="text"
                                        :placeholder="lineHeight.loose"
                                        v-model="lineHeight.loose"
                                /></res-input>
                            </div>
                        </div>
                        <span
                            class="col-75"
                            style="font-size:12px;"
                            v-bind:style="{ lineHeight: lineHeight.loose }"
                            >This line height applies to small font sizes.
                            Here's some sample text for you to test this value.
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.</span
                        >
                    </div>

                    <div class="flex margin-xl">
                        <div class="flex align-base col-25">
                            <div class="flex c-typography-form">
                                <label>Body</label>
                                <res-input
                                    ><input
                                        type="text"
                                        :placeholder="lineHeight.body"
                                        v-model="lineHeight.body"
                                /></res-input>
                            </div>
                        </div>
                        <span
                            class="col-75"
                            style="font-size:18px;"
                            v-bind:style="{ lineHeight: lineHeight.body }"
                            >This line height applies to the body copy in an
                            article, which we think is a little different than
                            other text. Here's some sample text for you to test
                            this value.</span
                        >
                    </div>
                </div>
            </div>

            <div class="flex margin-lg">
                <div class="col-20">
                    <h5 class="margin-xxs">
                        Letterspacing
                    </h5>
                    <p>Set three contexts</p>
                </div>
                <div class="col-80">
                    <div class="flex margin-lg">
                        <div class="flex align-base col-25">
                            <div class="flex c-typography-form">
                                <label>Default</label>
                                <res-input
                                    ><input
                                        type="text"
                                        :placeholder="letterSpacing.default"
                                        v-model="letterSpacing.default"
                                /></res-input>
                            </div>
                        </div>
                        <span
                            style="font-size:16px; flex-basis: 75%;"
                            v-bind:style="{
                                letterSpacing: letterSpacing.default
                            }"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.</span
                        >
                    </div>

                    <div class="flex margin-lg">
                        <div class="flex align-base col-25">
                            <div class="flex c-typography-form">
                                <label>Caps</label>
                                <res-input
                                    ><input
                                        type="text"
                                        :placeholder="letterSpacing.caps"
                                        v-model="letterSpacing.caps"
                                /></res-input>
                            </div>
                        </div>
                        <span
                            style="font-size:12px; text-transform:uppercase; flex-basis: 75%;"
                            v-bind:style="{ letterSpacing: letterSpacing.caps }"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.</span
                        >
                    </div>

                    <div class="flex margin-lg">
                        <div class="flex align-base col-25">
                            <div class="flex c-typography-form">
                                <label>Expressive</label>
                                <res-input
                                    ><input
                                        type="text"
                                        :placeholder="letterSpacing.expressive"
                                        v-model="letterSpacing.expressive"
                                /></res-input>
                            </div>
                        </div>
                        <span
                            style="font-size:12px; flex-basis: 75%;"
                            v-bind:style="{
                                letterSpacing: letterSpacing.expressive
                            }"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.</span
                        >
                    </div>
                </div>
            </div>
            <p class="c-top margin-reset"><a href="#top">Top</a></p>
        </div>
        <hr />
        <div class="c-panel c-panel-typography" id="lora">
            <h2 class="margin-lg lora-bold line-height-reset">
                Lora <span class="type-regular">Regular, Bold</span>
            </h2>

            <div class="flex margin-lg">
                <div class="col-20">
                    <h5 class="margin-xxs">
                        Line Height
                    </h5>
                    <p>Set four contexts</p>
                </div>
                <div class="col-80">
                    <div class="flex margin-lg">
                        <div class="flex align-base col-25">
                            <div class="flex c-typography-form">
                                <label>Tight</label>
                                <res-input
                                    ><input
                                        type="text"
                                        :placeholder="lineHeight.tight"
                                        v-model="lineHeight.tight"
                                /></res-input>
                            </div>
                        </div>
                        <span
                            class="lora-bold col-75"
                            style="font-size:44px; font-weight: bold;"
                            v-bind:style="{ lineHeight: lineHeight.tight }"
                            >Tight applies to larger font sizes, like those used
                            in headlines</span
                        >
                    </div>

                    <div class="flex margin-lg">
                        <div class="flex align-base col-25">
                            <div class="flex c-typography-form">
                                <label>Medium</label>
                                <res-input
                                    ><input
                                        type="text"
                                        :placeholder="lineHeight.medium"
                                        v-model="lineHeight.medium"
                                /></res-input>
                            </div>
                        </div>
                        <span
                            class="lora-regular col-75"
                            style="font-size:16px;"
                            v-bind:style="{ lineHeight: lineHeight.medium }"
                            >This line height applies to medium font sizes.
                            Here's some sample text for you to test this value.
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.</span
                        >
                    </div>

                    <div class="flex margin-lg">
                        <div class="flex align-base col-25">
                            <div class="flex c-typography-form">
                                <label>Loose</label>
                                <res-input
                                    ><input
                                        type="text"
                                        :placeholder="lineHeight.loose"
                                        v-model="lineHeight.loose"
                                /></res-input>
                            </div>
                        </div>
                        <span
                            class="lora-regular col-75"
                            style="font-size:12px;"
                            v-bind:style="{ lineHeight: lineHeight.loose }"
                            >This line height applies to small font sizes.
                            Here's some sample text for you to test this value.
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.</span
                        >
                    </div>

                    <div class="flex margin-xl">
                        <div class="flex align-base col-25">
                            <div class="flex c-typography-form">
                                <label>Body</label>
                                <res-input
                                    ><input
                                        type="text"
                                        :placeholder="lineHeight.body"
                                        v-model="lineHeight.body"
                                /></res-input>
                            </div>
                        </div>
                        <span
                            class="lora-regular col-75"
                            style="font-size:18px;"
                            v-bind:style="{ lineHeight: lineHeight.body }"
                            >This line height applies to the body copy in an
                            article, which we think is a little different than
                            other text. Here's some sample text for you to test
                            this value.</span
                        >
                    </div>
                </div>
            </div>

            <div class="flex">
                <div class="col-20">
                    <h5 class="margin-xxs">
                        Letterspacing
                    </h5>
                    <p>Set three contexts</p>
                </div>
                <div class="col-80">
                    <div class="flex margin-lg">
                        <div class="flex align-base col-25">
                            <div class="flex c-typography-form">
                                <label>Default</label>
                                <res-input
                                    ><input
                                        type="text"
                                        :placeholder="letterSpacing.default"
                                        v-model="letterSpacing.default"
                                /></res-input>
                            </div>
                        </div>
                        <span
                            class="lora-regular col-75"
                            style="font-size:16px;"
                            v-bind:style="{
                                letterSpacing: letterSpacing.default
                            }"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.</span
                        >
                    </div>

                    <div class="flex margin-lg">
                        <div class="flex align-base col-25">
                            <div class="flex c-typography-form">
                                <label>Caps</label>
                                <res-input
                                    ><input
                                        type="text"
                                        :placeholder="letterSpacing.caps"
                                        v-model="letterSpacing.caps"
                                /></res-input>
                            </div>
                        </div>
                        <span
                            class="lora-regular col-75"
                            style="font-size:12px; text-transform:uppercase;"
                            v-bind:style="{ letterSpacing: letterSpacing.caps }"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.</span
                        >
                    </div>

                    <div class="flex margin-lg">
                        <div class="flex align-base col-25">
                            <div class="flex c-typography-form">
                                <label>Expressive</label>
                                <res-input
                                    ><input
                                        type="text"
                                        :placeholder="letterSpacing.expressive"
                                        v-model="letterSpacing.expressive"
                                /></res-input>
                            </div>
                        </div>
                        <span
                            class="lora-regular col-75"
                            style="font-size:12px;"
                            v-bind:style="{
                                letterSpacing: letterSpacing.expressive
                            }"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.</span
                        >
                    </div>
                </div>
            </div>
            <p class="c-top"><a href="#top">Top</a></p>
        </div>

        <SaveButton :enabled="true" v-on:save="handleSave"></SaveButton>

        <hr />

        <PrevNext :prevLink="'typesizing'" :nextLink="'categories'"></PrevNext>
    </section>
</template>

<script>
import SaveButton from '@/components/SaveButton';
import PrevNext from '@/components/PrevNext';
import { mapState } from 'vuex';

export default {
    name: 'Typography',
    components: {
        SaveButton,
        PrevNext
    },
    data: () => ({
        savedModel: ''
    }),
    computed: {
        ...mapState({
            lineHeight: state => state.lineHeight,
            letterSpacing: state => state.letterSpacing
        })
    },
    methods: {
        handleSave() {
            this.$store.commit('saveCharacterSpacing', {
                lineHeight: this.lineHeight,
                letterSpacing: this.letterSpacing
            });
        }
    }
};
</script>

<style scoped></style>
