<template>
    <div class="c-add-color-form">
        <div class="margin-med">
            <res-input
                ><label>Name</label> <input type="text" placeholder="name" />
                <span slot="help"
                    >Name this group of colors; This should be useful to you,
                    and can be something like "Brand Color" or, simply,
                    "Pink."</span
                ></res-input
            >
        </div>

        <div class="flex align-center col-50" style="margin-bottom: 12px;">
            <res-input
                ><label>Main</label> <input type="text" placeholder="main" />
            </res-input>
            <div class="c-color-picker main"></div>
        </div>

        <div class="c-colors-form flex">
            <div class="flex align-center col-50" style="margin-bottom: 12px;">
                <res-input
                    ><label>Faded</label>
                    <input type="text" placeholder="Faded" />
                </res-input>
                <div class="c-color-picker faded"></div>
            </div>

            <div class="flex align-center col-50" style="margin-bottom: 12px;">
                <res-input
                    ><label>Light</label>
                    <input type="text" placeholder="Light" />
                </res-input>
                <div class="c-color-picker light"></div>
            </div>
        </div>

        <div class="c-colors-form flex margin-med">
            <div class="flex align-center col-50" style="margin-bottom: 12px;">
                <res-input
                    ><label>Bright</label>
                    <input type="text" placeholder="Bright" />
                </res-input>
                <div class="c-color-picker bright"></div>
            </div>

            <div class="flex align-center col-50" style="margin-bottom: 12px;">
                <res-input
                    ><label>Dark</label>
                    <input type="text" placeholder="Dark" />
                </res-input>
                <div class="c-color-picker dark"></div>
            </div>
        </div>

        <div>
            <res-button design="secondary"
                ><button>Save Color</button></res-button
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'ColorForm'
};
</script>

<style>
:root {
    --color1-main: #fc6340;
    --color1-faded: #f7f3ef;
    --color1-light: #ffdbc2;
    --color1-bright: #ff7e61;
    --color1-dark: #e74f2d;
}

.c-add-color-form {
    max-width: 500px;
    padding: 16px;
    border: 1px solid #e0e0e0;
}

.c-color-picker {
    border: 1px solid #e0e0e0;
    height: 25px;
    width: 25px;
    background: #000;
    border-radius: 100%;
    margin-top: 30px;
    margin-left: 10px;
    margin-right: 10px;
}

.faded {
    background: var(--color1-faded);
}

.light {
    background: var(--color1-light);
}

.main {
    background: var(--color1-main);
}

.bright {
    background: var(--color1-bright);
}

.dark {
    background: var(--color1-dark);
}
</style>
