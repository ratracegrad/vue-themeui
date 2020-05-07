<template>
    <div class="margin-lg c-color-card">
        <div class="flex c-color-card--swatches margin-lg">
            <div>
                <p class="c-color-card--swatch-label">Black</p>
                <div
                    class="black c-color-card--swatch"
                    v-bind:style="{ backgroundColor: neutrals.black }"
                ></div>
                <ColorPicker v-model="neutrals.black"></ColorPicker>
                <div class="flex align-center">
                    <input
                        type="text"
                        name="main"
                        :placeholder="neutrals.black"
                        v-model="neutrals.black"
                    />
                    <div></div>
                </div>
            </div>
            <div>
                <p class="c-color-card--swatch-label">Gray80</p>
                <div
                    class="faded c-color-card--swatch"
                    v-bind:style="{ backgroundColor: neutrals.gray80 }"
                ></div>
                <ColorPicker v-model="neutrals.gray80"></ColorPicker>

                <div class="flex align-center">
                    <input
                        type="text"
                        name="faded"
                        :placeholder="neutrals.gray80"
                        v-model="neutrals.gray80"
                    />
                    <div></div>
                </div>
            </div>

            <div>
                <p class="c-color-card--swatch-label">Gray60</p>
                <div
                    class="light c-color-card--swatch"
                    v-bind:style="{ backgroundColor: neutrals.gray60 }"
                ></div>
                <ColorPicker v-model="neutrals.gray60"></ColorPicker>

                <div class="flex align-center">
                    <input
                        type="text"
                        name="faded"
                        :placeholder="neutrals.gray60"
                        v-model="neutrals.gray60"
                    />
                    <div></div>
                </div>
            </div>

            <div>
                <p class="c-color-card--swatch-label">Gray50</p>
                <div
                    class="bright c-color-card--swatch"
                    v-bind:style="{ backgroundColor: neutrals.gray50 }"
                ></div>
                <ColorPicker v-model="neutrals.gray50"></ColorPicker>

                <div class="flex align-center">
                    <input
                        type="text"
                        name="bright"
                        :placeholder="neutrals.gray50"
                        v-model="neutrals.gray50"
                    />
                    <div></div>
                </div>
            </div>

            <div>
                <p class="c-color-card--swatch-label">Gray40</p>
                <div
                    class="dark c-color-card--swatch"
                    v-bind:style="{ backgroundColor: neutrals.gray40 }"
                ></div>
                <ColorPicker v-model="neutrals.gray40"></ColorPicker>

                <div class="flex align-center">
                    <input
                        type="text"
                        name="dark"
                        :placeholder="neutrals.gray40"
                        v-model="neutrals.gray40"
                    />
                    <div></div>
                </div>
            </div>

            <div>
                <p class="c-color-card--swatch-label">Gray20</p>
                <div
                    class="dark c-color-card--swatch"
                    v-bind:style="{ backgroundColor: neutrals.gray20 }"
                ></div>
                <ColorPicker v-model="neutrals.gray20"></ColorPicker>

                <div class="flex align-center">
                    <input
                        type="text"
                        name="dark"
                        :placeholder="neutrals.gray20"
                        v-model="neutrals.gray20"
                    />
                    <div></div>
                </div>
            </div>

            <div>
                <p class="c-color-card--swatch-label">Gray10</p>
                <div
                    class="dark c-color-card--swatch"
                    v-bind:style="{ backgroundColor: neutrals.gray10 }"
                ></div>
                <ColorPicker v-model="neutrals.gray10"></ColorPicker>

                <div class="flex align-center">
                    <input
                        type="text"
                        name="dark"
                        :placeholder="neutrals.gray10"
                        v-model="neutrals.gray10"
                    />
                    <div></div>
                </div>
            </div>

            <div>
                <p class="c-color-card--swatch-label">Gray05</p>
                <div
                    class="dark c-color-card--swatch"
                    v-bind:style="{ backgroundColor: neutrals.gray05 }"
                ></div>
                <ColorPicker v-model="neutrals.gray05"></ColorPicker>

                <div class="flex align-center">
                    <input
                        type="text"
                        name="dark"
                        :placeholder="neutrals.gray05"
                        v-model="neutrals.gray05"
                    />
                    <div></div>
                </div>
            </div>

            <div>
                <p class="c-color-card--swatch-label">White</p>
                <div
                    class="dark c-color-card--swatch"
                    v-bind:style="{ backgroundColor: neutrals.white }"
                ></div>
                <ColorPicker v-model="neutrals.white"></ColorPicker>

                <div class="flex align-center">
                    <input
                        type="text"
                        name="dark"
                        :placeholder="neutrals.white"
                        v-model="neutrals.white"
                    />
                    <div></div>
                </div>
            </div>
        </div>

        <res-button design="primary" style="margin-left: auto;"
            ><button>Save</button></res-button
        >
    </div>
</template>

<script>
import ColorPicker from '@/components/ColorPicker';

export default {
    name: 'NeutralsCard',
    components: {
        ColorPicker
    },
    data: () => ({
        neutrals: {
            black: '#000000',
            gray80: '#2D2D2D',
            gray60: '#6E6E6E',
            gray50: '#757575',
            gray40: '#9F9F9F',
            gray20: '#C4C4C4',
            gray10: '#DADADA',
            gray05: '#F4F4F4',
            white: '#FFFFFF'
        },
        isHidden: {
            Black: true,
            Gray80: true,
            Gray60: true,
            Gray50: true,
            Gray40: true,
            Gray20: true,
            Gray10: true,
            Gray05: true,
            White: true
        }
    })
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
