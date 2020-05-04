<template>
    <div class="c-panel c-panel-typography" :id="font.name">
        <h2 class="margin-lg line-height-reset">
            {{ font.name }}
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
                                    :placeholder="font.lineHeight.tight"
                                    v-model="font.lineHeight.tight"
                            /></res-input>
                        </div>
                    </div>
                    <span
                        class="col-75"
                        style="font-size:44px; font-weight: bold;"
                        v-bind:style="{ lineHeight: font.lineHeight.tight }"
                        >Tight applies to larger font sizes, like those used in
                        headlines</span
                    >
                </div>

                <div class="flex margin-lg">
                    <div class="flex align-base col-25">
                        <div class="flex c-typography-form">
                            <label>Medium</label>
                            <res-input
                                ><input
                                    type="text"
                                    :placeholder="font.lineHeight.medium"
                                    v-model="font.lineHeight.medium"
                            /></res-input>
                        </div>
                    </div>
                    <span
                        class="col-75"
                        style="font-size:16px;"
                        v-bind:style="{ lineHeight: font.lineHeight.medium }"
                        >This line height applies to medium font sizes. Here's
                        some sample text for you to test this value. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.</span
                    >
                </div>

                <div class="flex margin-lg">
                    <div class="flex align-base col-25">
                        <div class="flex c-typography-form">
                            <label>Loose</label>
                            <res-input
                                ><input
                                    type="text"
                                    :placeholder="font.lineHeight.loose"
                                    v-model="font.lineHeight.loose"
                            /></res-input>
                        </div>
                    </div>
                    <span
                        class="col-75"
                        style="font-size:12px;"
                        v-bind:style="{ lineHeight: font.lineHeight.loose }"
                        >This line height applies to small font sizes. Here's
                        some sample text for you to test this value. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua.</span
                    >
                </div>

                <div class="flex margin-xl">
                    <div class="flex align-base col-25">
                        <div class="flex c-typography-form">
                            <label>Body</label>
                            <res-input
                                ><input
                                    type="text"
                                    :placeholder="font.lineHeight.body"
                                    v-model="font.lineHeight.body"
                            /></res-input>
                        </div>
                    </div>
                    <span
                        class="col-75"
                        style="font-size:18px;"
                        v-bind:style="{ lineHeight: font.lineHeight.body }"
                        >This line height applies to the body copy in an
                        article, which we think is a little different than other
                        text. Here's some sample text for you to test this
                        value.</span
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
                                    :placeholder="font.letterSpacing.default"
                                    v-model="font.letterSpacing.default"
                            /></res-input>
                        </div>
                    </div>
                    <span
                        style="font-size:16px; flex-basis: 75%;"
                        v-bind:style="{
                            letterSpacing: font.letterSpacing.default
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
                                    :placeholder="font.letterSpacing.caps"
                                    v-model="font.letterSpacing.caps"
                            /></res-input>
                        </div>
                    </div>
                    <span
                        style="font-size:12px; text-transform:uppercase; flex-basis: 75%;"
                        v-bind:style="{
                            letterSpacing: font.letterSpacing.caps
                        }"
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
                                    :placeholder="font.letterSpacing.expressive"
                                    v-model="font.letterSpacing.expressive"
                            /></res-input>
                        </div>
                    </div>
                    <span
                        style="font-size:12px; flex-basis: 75%;"
                        v-bind:style="{
                            letterSpacing: font.letterSpacing.expressive
                        }"
                        >Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.</span
                    >
                </div>
            </div>
        </div>

        <SaveButton :enabled="true" v-on:save="handleSave"></SaveButton>
        <p class="c-top margin-reset"><a href="#top">Top</a></p>
    </div>
</template>

<script>
import SaveButton from '@/components/SaveButton';

export default {
    name: 'CharacterSpacing',
    components: {
        SaveButton
    },
    props: {
        font: {
            type: Object,
            required: true
        }
    },
    methods: {
        handleSave() {
            this.$store.commit('saveFontCharacterSpacing', this.font);
        }
    }
};
</script>

<style scoped></style>
