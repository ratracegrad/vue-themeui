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
                <span
                    v-for="(font, spanIdx) in fonts"
                    :key="spanIdx"
                    class="c-jump"
                >
                    <a :href="`#${font.name}`">
                        {{ font.name }}
                    </a>
                </span>
                <!--                <span class="c-jump"><a href="#graphik">Graphik</a></span>-->
                <!--                <span class="c-jump lora-regular"-->
                <!--                    ><a href="#lora">Lora</a></span-->
                <!--                >-->
            </p>
        </div>
        <hr />

        <div v-for="(font, fontIdx) in fonts" :key="fontIdx">
            <CharacterSpacing :font="font" :id="font.name"></CharacterSpacing>
            <hr />
        </div>

<!--        <SaveButton :enabled="true" v-on:save="handleSave"></SaveButton>-->

        <hr />

        <PrevNext :prevLink="'typesizing'" :nextLink="'categories'"></PrevNext>
    </section>
</template>

<script>
// import SaveButton from '@/components/SaveButton';
import CharacterSpacing from '../components/CharacterSpacing';
import PrevNext from '@/components/PrevNext';
import { mapState } from 'vuex';

export default {
    name: 'Typography',
    components: {
        CharacterSpacing,
        PrevNext
    },
    data: () => ({
        savedModel: ''
    }),
    computed: {
        ...mapState({
            lineHeight: state => state.lineHeight,
            letterSpacing: state => state.letterSpacing,
            fonts: state => state.fonts
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
