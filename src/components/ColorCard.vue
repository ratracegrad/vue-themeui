<template>
    <div class="margin-lg c-color-card">
        <h3>{{ colorID }}</h3>
        <div class="margin-med">
            <div
                class="neutrals-row main"
                v-bind:style="{ backgroundColor: colorData.main }"
            >
                Main
                <div class="flex align-center">
                    <input
                        type="text"
                        name="main"
                        :placeholder="colorData.main"
                        v-model="colorData.main"
                    />
                    <div>
                        <div>
                            <button
                                v-on:click="isHiddenMain = !isHiddenMain"
                                class="c-show-picker"
                            ></button>
                            <v-color-picker
                                v-model="colorData.main"
                                v-if="!isHiddenMain"
                            ></v-color-picker>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex">
                <div class="col-50">
                    <div
                        class="neutrals-row faded"
                        v-bind:style="{ backgroundColor: colorData.faded }"
                    >
                        Faded

                        <div class="flex align-center">
                            <input
                                type="text"
                                name="main"
                                :placeholder="colorData.faded"
                                v-model="colorData.faded"
                            />
                            <div>
                                <button
                                    v-on:click="isHiddenFaded = !isHiddenFaded"
                                    class="c-show-picker"
                                ></button>
                                <v-color-picker
                                    v-model="colorData.faded"
                                    v-if="!isHiddenFaded"
                                ></v-color-picker>
                            </div>
                        </div>
                    </div>
                    <div
                        class="neutrals-row light"
                        v-bind:style="{ backgroundColor: colorData.light }"
                    >
                        Light

                        <div class="flex align-center">
                            <input
                                type="text"
                                name="light"
                                :placeholder="colorData.light"
                                v-model="colorData.light"
                            />
                            <div>
                                <button
                                    v-on:click="isHiddenLight = !isHiddenLight"
                                    class="c-show-picker"
                                ></button>
                                <v-color-picker
                                    v-model="colorData.light"
                                    v-if="!isHiddenLight"
                                ></v-color-picker>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-50">
                    <div
                        class="neutrals-row bright"
                        v-bind:style="{ backgroundColor: colorData.bright }"
                    >
                        Bright

                        <div class="flex align-center">
                            <input
                                type="text"
                                name="main"
                                :placeholder="colorData.bright"
                                v-model="colorData.bright"
                            />
                            <div>
                                <button
                                    v-on:click="
                                        isHiddenBright = !isHiddenBright
                                    "
                                    class="c-show-picker"
                                ></button>
                                <v-color-picker
                                    v-model="colorData.bright"
                                    v-if="!isHiddenBright"
                                ></v-color-picker>
                            </div>
                        </div>
                    </div>
                    <div
                        class="neutrals-row dark"
                        v-bind:style="{ backgroundColor: colorData.dark }"
                    >
                        Dark

                        <div class="flex align-center">
                            <input
                                type="text"
                                name="dark"
                                :placeholder="colorData.dark"
                                v-model="colorData.dark"
                            />
                            <div>
                                <button
                                    v-on:click="isHiddenDark = !isHiddenDark"
                                    class="c-show-picker"
                                ></button>
                                <v-color-picker
                                    v-model="colorData.dark"
                                    v-if="!isHiddenDark"
                                ></v-color-picker>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <res-button design="primary"><button>Save</button></res-button>
        <res-button v-on:click="handleDeleteClick"
            ><res-icon name="trash"></res-icon
            ><button>Delete</button></res-button
        >
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
.c-color-card {
    width: 600px;
    border: 1px solid #e0e0e0;
    padding: 10px;
    margin-right: 10px;
}
svg g {
    stroke: #fff;
}
svg {
    width: 16px;
    margin-left: 6px;
}
input {
    border-bottom: 1px solid #fff;
    width: 100px;
    font-size: 20px;
}

.main,
.light,
.dark {
    color: #fff;
}

.faded .c-show-picker,
.bright .c-show-picker {
    border: 1px solid #4b4b4b;
}
.faded input,
.bright input {
    border-bottom: 1px solid #4b4b4b;
}

.v-color-picker {
    position: absolute;
    z-index: 10;
}
.c-show-picker {
    width: 15px;
    height: 15px;
    margin-left: 10px;
    border: 1px solid #fff;
    border-radius: 20%;
}
</style>
