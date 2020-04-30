<template>
    <div
        style="width: 600px; border: 1px solid #e0e0e0; padding: 10px; margin-right: 10px"
    >
        <div class="margin-med">
            <div class="flex">
                <div class="col-50">
                    <div
                        class="neutrals-row black"
                        v-bind:style="{ backgroundColor: neutrals.black }"
                    >
                        Black

                        <div>
                            <input
                                type="text"
                                name="black"
                                :placeholder="neutrals.black"
                                v-model="neutrals.black"
                            />
                        </div>
                    </div>
                    <div
                        class="neutrals-row gray80"
                        v-bind:style="{ backgroundColor: neutrals.gray80 }"
                    >
                        gray80

                        <div>
                            <input
                                type="text"
                                name="black"
                                :placeholder="neutrals.gray80"
                                v-model="neutrals.gray80"
                            />
                        </div>
                    </div>
                    <div
                        class="neutrals-row gray60"
                        v-bind:style="{ backgroundColor: neutrals.gray60 }"
                    >
                        gray60

                        <div>
                            <input
                                type="text"
                                name="black"
                                :placeholder="neutrals.gray80"
                                v-model="neutrals.gray60"
                            />
                        </div>
                    </div>
                    <div
                        class="neutrals-row gray50"
                        v-bind:style="{ backgroundColor: neutrals.gray50 }"
                    >
                        gray50

                        <div>
                            <input
                                type="text"
                                name="black"
                                :placeholder="neutrals.gray50"
                                v-model="neutrals.gray50"
                            />
                        </div>
                    </div>
                </div>

                <div class="col-50">
                    <div
                        class="neutrals-row gray40"
                        v-bind:style="{ backgroundColor: neutrals.gray40 }"
                    >
                        gray40

                        <div>
                            <input
                                type="text"
                                name="black"
                                :placeholder="neutrals.gray40"
                                v-model="neutrals.gray40"
                            />
                        </div>
                    </div>
                    <div
                        class="neutrals-row gray20"
                        v-bind:style="{ backgroundColor: neutrals.gray20 }"
                    >
                        gray20

                        <div>
                            <input
                                type="text"
                                name="black"
                                :placeholder="neutrals.gray20"
                                v-model="neutrals.gray20"
                            />
                        </div>
                    </div>
                    <div
                        class="neutrals-row gray10"
                        v-bind:style="{ backgroundColor: neutrals.gray10 }"
                    >
                        gray10

                        <div>
                            <input
                                type="text"
                                name="black"
                                :placeholder="neutrals.gray10"
                                v-model="neutrals.gray10"
                            />
                        </div>
                    </div>
                    <div
                        class="neutrals-row gray05"
                        v-bind:style="{ backgroundColor: neutrals.gray05 }"
                    >
                        gray05

                        <div>
                            <input
                                type="text"
                                name="black"
                                :placeholder="neutrals.gray05"
                                v-model="neutrals.gray05"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div
                class="neutrals-row white"
                style="border-bottom: 1px solid #efefef; border-right: 1px solid #efefef;border-left: 1px solid #efefef;"
                v-bind:style="{ backgroundColor: neutrals.white }"
            >
                white

                <div>
                    <input
                        type="text"
                        name="black"
                        :placeholder="neutrals.white"
                        v-model="neutrals.white"
                    />
                </div>
            </div>
        </div>
        <res-button design="primary" style="margin-left: auto;"
            ><button>Save</button></res-button
        >
    </div>
</template>

<script>
export default {
    name: 'ColorCard',
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
        }
    })
};
</script>

<style>
:root {
    --neutrals-black: #000000;
    --neutrals-gray80: #2d2d2d;
    --neutrals-gray60: #6e6e6e;
    --neutrals-gray50: #757575;
    --neutrals-gray40: #9f9f9f;
    --neutrals-gray20: #c4c4c4;
    --neutrals-gray10: #dadada;
    --neutrals-gray05: #f4f4f4;
    --neutrals-white: #ffffff;
}

.black {
    background-color: var(--neutrals-black);
    color: #fff;
}

.gray80 {
    background-color: var(--neutrals-gray80);
    color: #fff;
}

.gray60 {
    background-color: var(--neutrals-gray60);
    color: #fff;
}

.gray50 {
    background-color: var(--neutrals-gray50);
    color: #fff;
}

.gray40 {
    background-color: var(--neutrals-gray40);
    color: black;
}

.gray20 {
    background-color: var(--neutrals-gray20);
    color: black;
}

.gray10 {
    background-color: var(--neutrals-gray10);
    color: black;
}

.gray05 {
    background-color: var(--neutrals-gray05);
    color: black;
}

.white {
    background-color: var(--neutrals-white);
    color: black;
}

.neutrals-row {
    width: 100%;
    padding: 5px;
    height: 100px;
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
    border-bottom: 1px solid #fff;
    width: 100px;
    font-size: 20px;
}
</style>
