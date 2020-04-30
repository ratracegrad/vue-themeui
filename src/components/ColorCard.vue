<template>
    <div class="margin-lg c-color-card">
        <h3>{{ colorID }}</h3>
        <div class="margin-med">
            <div
                class="neutrals-row main"
                v-bind:style="{ backgroundColor: colorData.main }"
            >
                Main

                <div>
                    <input
                        type="text"
                        name="main"
                        :placeholder="colorData.main"
                        v-model="colorData.main"
                    />
                </div>
            </div>
            <div class="flex">
                <div class="col-50">
                    <div
                        class="neutrals-row faded"
                        v-bind:style="{ backgroundColor: colorData.faded }"
                    >
                        Faded

                        <div>
                            <input
                                type="text"
                                name="main"
                                :placeholder="colorData.faded"
                                v-model="colorData.faded"
                            />
                        </div>
                    </div>
                    <div
                        class="neutrals-row light"
                        v-bind:style="{ backgroundColor: colorData.light }"
                    >
                        Light

                        <div>
                            <input
                                type="text"
                                name="light"
                                :placeholder="colorData.light"
                                v-model="colorData.light"
                            />
                        </div>
                    </div>
                </div>
                <div class="col-50">
                    <div
                        class="neutrals-row bright"
                        v-bind:style="{ backgroundColor: colorData.bright }"
                    >
                        Bright

                        <div>
                            <input
                                type="text"
                                name="main"
                                :placeholder="colorData.bright"
                                v-model="colorData.bright"
                            />
                        </div>
                    </div>
                    <div
                        class="neutrals-row dark"
                        v-bind:style="{ backgroundColor: colorData.dark }"
                    >
                        Dark

                        <div>
                            <input
                                type="text"
                                name="dark"
                                :placeholder="colorData.dark"
                                v-model="colorData.dark"
                            />
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
</style>
