<template>
    <div class="margin-lg c-color-card">
        <div class="flex c-color-card--swatches">
            <div class="col-30">
                <h3>{{ colorID }}</h3>
                <p>some descriptive txt here</p>
            </div>
            <div>
                <p class="c-color-card--swatch-label">Main</p>
                <div
                    class="main c-color-card--swatch"
                    v-bind:style="{ backgroundColor: colorData.main }"
                ></div>
                <div class="flex align-center">
                    <button
                        v-on:click="isHiddenMain = !isHiddenMain"
                        class="c-show-picker"
                        v-bind:style="{ backgroundColor: colorData.main }"
                    ></button>
                    <v-color-picker
                        v-model="colorData.main"
                        v-if="!isHiddenMain"
                        width="250"
                    ></v-color-picker>
                </div>
                <div class="flex align-center">
                    <input
                        type="text"
                        name="main"
                        :placeholder="colorData.main"
                        v-model="colorData.main"
                    />
                    <div></div>
                </div>
            </div>
            <div>
                <p class="c-color-card--swatch-label">Faded</p>
                <div
                    class="faded c-color-card--swatch"
                    v-bind:style="{ backgroundColor: colorData.faded }"
                ></div>
                <div class="flex align-center">
                    <button
                        v-on:click="isHiddenFaded = !isHiddenFaded"
                        class="c-show-picker"
                        v-bind:style="{ backgroundColor: colorData.faded }"
                    ></button>
                    <v-color-picker
                        v-model="colorData.faded"
                        v-if="!isHiddenFaded"
                        width="250"
                    ></v-color-picker>
                </div>
                <div class="flex align-center">
                    <input
                        type="text"
                        name="faded"
                        :placeholder="colorData.faded"
                        v-model="colorData.faded"
                    />
                    <div></div>
                </div>
            </div>

            <div>
                <p class="c-color-card--swatch-label">Light</p>
                <div
                    class="light c-color-card--swatch"
                    v-bind:style="{ backgroundColor: colorData.light }"
                ></div>
                <div class="flex align-center">
                    <button
                        v-on:click="isHiddenLight = !isHiddenLight"
                        class="c-show-picker"
                        v-bind:style="{ backgroundColor: colorData.light }"
                    ></button>
                    <v-color-picker
                        v-model="colorData.light"
                        v-if="!isHiddenLight"
                        width="250"
                    ></v-color-picker>
                </div>
                <div class="flex align-center">
                    <input
                        type="text"
                        name="faded"
                        :placeholder="colorData.light"
                        v-model="colorData.light"
                    />
                    <div></div>
                </div>
            </div>

            <div>
                <p class="c-color-card--swatch-label">Bright</p>
                <div
                    class="bright c-color-card--swatch"
                    v-bind:style="{ backgroundColor: colorData.bright }"
                ></div>
                <div class="flex align-center">
                    <button
                        v-on:click="isHiddenBright = !isHiddenBright"
                        class="c-show-picker"
                        v-bind:style="{ backgroundColor: colorData.bright }"
                    ></button>
                    <v-color-picker
                        v-model="colorData.bright"
                        v-if="!isHiddenBright"
                        width="250"
                    ></v-color-picker>
                </div>
                <div class="flex align-center">
                    <input
                        type="text"
                        name="bright"
                        :placeholder="colorData.bright"
                        v-model="colorData.bright"
                    />
                    <div></div>
                </div>
            </div>

            <div>
                <p class="c-color-card--swatch-label">Dark</p>
                <div
                    class="dark c-color-card--swatch"
                    v-bind:style="{ backgroundColor: colorData.dark }"
                ></div>
                <div class="flex align-center">
                    <button
                        v-on:click="isHiddenDark = !isHiddenDark"
                        class="c-show-picker"
                        v-bind:style="{ backgroundColor: colorData.dark }"
                    ></button>
                    <v-color-picker
                        v-model="colorData.dark"
                        v-if="!isHiddenDark"
                        width="250"
                    ></v-color-picker>
                </div>
                <div class="flex align-center">
                    <input
                        type="text"
                        name="dark"
                        :placeholder="colorData.dark"
                        v-model="colorData.dark"
                    />
                    <div></div>
                </div>
            </div>
        </div>

        <div class="right margin-med">
            <res-button design="default" res-modal-open="delete-color-modal"
                ><res-icon name="trash"></res-icon
                ><button>Delete</button></res-button
            >
            <res-modal id="delete-color-modal" close-on-bg-click="">
                <div>
                    <p style="margin-bottom: 1rem;">Delete {{ colorID }}?</p>

                    <res-button
                        id="modal-close"
                        design="secondary"
                        res-modal-close="delete-color-modal"
                        v-on:click="handleDeleteClick"
                        ><button>Delete {{ colorID }}</button></res-button
                    >

                    <res-button
                        id="modal-close"
                        res-modal-close="delete-color-modal"
                        style="margin-left: 1rem;"
                    >
                        <res-icon name="x"></res-icon
                        ><button>Cancel</button></res-button
                    >
                </div>
            </res-modal>
        </div>

        <div>
            <res-button design="primary"><button>Save</button></res-button>
        </div>
        <hr />
    </div>
</template>

<script>
export default {
    name: 'ColorCard',
    props: ['colorData', 'colorID'],
    data() {
        return {
            isHiddenMain: true,
            isHiddenFaded: true,
            isHiddenLight: true,
            isHiddenBright: true,
            isHiddenDark: true
        };
    },
    methods: {
        handleDeleteClick: function() {
            this.$emit('delete', this.colorID);
        }
    }
};
</script>

<style>
:root {
    --colorData-main: #fc6340;
    --colorData-faded: #f7f3ef;
    --colorData-light: #ffdbc2;
    --colorData-bright: #ff7e61;
    --colorData-dark: #e74f2d;
}
</style>

<style scoped>
svg g {
    stroke: #fff;
}
svg {
    width: 16px;
    margin-left: 6px;
}
input {
    border-bottom: 1px solid #4b4b4b;
    width: 75px;
    font-size: 16px;
    margin-top: 10px;
    text-align: center;
}
</style>
