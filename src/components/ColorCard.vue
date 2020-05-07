<template>
    <div class="margin-lg c-color-card">
        <div class="flex c-color-card--swatches">
            <div class="col-30">
                <h3>
                    {{ colorID }}
                    <res-badge
                        v-if="isPrimaryColor"
                        style="margin-top: 10px;"
                        size="smallest"
                        design="sky"
                    >
                        <span>Primary</span></res-badge
                    >
                </h3>
                <p>some descriptive txt here</p>
            </div>
            <div>
                <p class="c-color-card--swatch-label">Main</p>
                <div
                    class="main c-color-card--swatch"
                    v-bind:style="{ backgroundColor: colorData.main }"
                ></div>
                <ColorPicker v-model="colorData.main"></ColorPicker>
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
                <ColorPicker v-model="colorData.faded"></ColorPicker>

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
                <ColorPicker v-model="colorData.light"></ColorPicker>
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
                <ColorPicker v-model="colorData.bright"></ColorPicker>
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
                <ColorPicker v-model="colorData.dark"></ColorPicker>
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

        <div class="right">
            <res-button
                design="default"
                :res-modal-open="'delete-color-modal' + this.colorID"
                ><res-icon name="trash"></res-icon
                ><button>Delete</button></res-button
            >
            <res-modal
                :id="'delete-color-modal' + this.colorID"
                close-on-bg-click=""
            >
                <div>
                    <p style="margin-bottom: 1rem;">Delete {{ colorID }}?</p>

                    <res-button
                        id="modal-close"
                        design="secondary"
                        :res-modal-close="'delete-color-modal' + this.colorID"
                        v-on:click="handleDeleteClick"
                        ><button>Delete {{ colorID }}</button></res-button
                    >

                    <res-button
                        id="modal-close"
                        :res-modal-close="'delete-color-modal' + this.colorID"
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
import ColorPicker from '@/components/ColorPicker';

export default {
    name: 'ColorCard',
    components: {
        ColorPicker
    },
    props: ['colorData', 'colorID', 'isPrimaryColor'],

    methods: {
        handleDeleteClick: function() {
            this.$emit('delete', this.colorID);
        }
    }
};
</script>

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
