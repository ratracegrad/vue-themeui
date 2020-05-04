<template>
    <section class="l-content">
        <div>
            <h2>Upload Your fonts</h2>
            <p>
                This help text should describe our recommendations around fonts.
                We will not impose any limits, but we will show the user how
                heavy their font load will be based on the number of fonts
                uploaded.
            </p>
        </div>
        <div class="margin-lg" id="submit-font-zip">
            <div class="margin-sm">
                <header class="margin-sm"><strong>Upload as:</strong></header>
                <div id="#upload-font-file">
                    <res-radio
                        ><input
                            type="radio"
                            name="r1"
                            value="FontFile"
                            v-model="radioChoice"
                        />
                        <label>Font File</label></res-radio
                    ><br />
                </div>
                <div id="#upload-font-url">
                    <res-radio
                        ><input
                            type="radio"
                            name="r1"
                            value="URL"
                            v-model="radioChoice"
                        />
                        <label>URL</label></res-radio
                    ><br />
                </div>
            </div>

            <div v-show="radioChoice === 'FontFile'">
                <form enctype="multipart/form-data" novalidate>
                    <res-button design="primary"
                        ><button>
                            <div class="uploadWrapper">
                                <res-icon name="upload"></res-icon>
                                <label class="fileContainer">
                                    Upload Fonts
                                    <input
                                        type="file"
                                        id="fontFile"
                                        ref="file"
                                        multiple
                                        accept=".ttf,.woff,.woff2,.otf"
                                        @change="getFiles"
                                    />
                                </label>
                            </div></button
                    ></res-button>
                </form>
            </div>

            <div v-show="radioChoice === 'URL'">
                <form @submit.prevent="saveWebFont">
                    <div style="display: flex; align-items: center;">
                        <res-input required :error="webfont.urlError">
                            <label for="webfontUrl">URL</label>
                            <input
                                type="text"
                                id="webfontUrl"
                                v-model="webfont.url"
                            />
                        </res-input>

                        <res-input
                            required
                            :error="webfont.nameError"
                            style="margin-left: 10px; margin-right: 10px;"
                        >
                            <label for="webfontName">Font Name:</label>
                            <input
                                type="text"
                                id="webfontName"
                                v-model="webfont.name"
                            />
                        </res-input>

                        <res-button design="primary"
                            ><button type="submit">Submit</button></res-button
                        >
                    </div>
                </form>
            </div>
        </div>
        <div v-if="totalSize > 0">
            <hr />
            <h3>Uploaded Fonts</h3>
            <p v-for="(font, fontIdx) in fonts" :key="fontIdx">
                {{ font.name }} - ({{ font.size | kb }})
                <res-icon
                    res-modal-open="deleteFont"
                    name="trash"
                    size="small"
                    style="vertical-align: middle;"
                    @click="deleteFont = font.name"
                ></res-icon>
            </p>
            <div class="totals">
                <strong>Total File Size: {{ totalSize | kb }} </strong>
                <span>&nbsp;</span>
                <res-icon
                    id="medium-font-load-tooltip"
                    name="info"
                    size="small"
                    style="vertical-align: text-bottom;"
                ></res-icon>
                <span>&nbsp;</span>
                <res-badge size="medium" :design="loadDesign"
                    >Load Time: {{ loadTime }}</res-badge
                >
            </div>
            <res-dropdown for="medium-font-load-tooltip"
                >file size range for "medium" is tktk</res-dropdown
            >
        </div>
        <hr />
        <PrevNext :prevLink="'index'" :nextLink="'typesizing'"></PrevNext>

        <res-modal id="deleteFont" close-on-bg-click="">
            <div>
                <p style="margin-bottom: 1rem;">Delete {{ deleteFont }}?</p>
                <res-button
                    @click="removeFont"
                    id="modal-close"
                    design="secondary"
                    res-modal-close="deleteFont"
                    ><button>Delete font</button></res-button
                >
                <res-button
                    @click="deleteFont = ''"
                    id="modal-close"
                    res-modal-close="deleteFont"
                    style="margin-left: 1rem;"
                >
                    <res-icon name="x"></res-icon
                    ><button>Cancel</button></res-button
                >
            </div>
        </res-modal>
    </section>
</template>

<script>
import * as axios from 'axios';
import PrevNext from '@/components/PrevNext';
import openType from 'opentype.js';
import { mapState } from 'vuex';

export default {
    name: 'Fonts',
    components: {
        PrevNext
    },
    data: () => ({
        radioChoice: null,
        uploadError: null,
        currentStatus: null,
        fileTypes: ['otf', 'ttf', 'woff'],
        deleteFont: '',
        webfont: {
            url: '',
            name: '',
            urlError: null,
            nameError: null
        },
        urlError: ''
    }),
    computed: {
        totalSize() {
            return this.fonts.reduce((accum, item) => accum + item.size, 0);
        },
        loadTime() {
            return this.totalSize <= this.fontSizes.fast
                ? 'fast'
                : this.totalSize <= this.fontSizes.moderate
                ? 'moderate'
                : 'slow';
        },
        loadDesign() {
            return this.totalSize <= this.fontSizes.fast
                ? 'grass'
                : this.totalSize <= this.fontSizes.moderate
                ? 'gold'
                : 'apple';
        },
        formInvalid() {
            return this.webfont.url === '' || this.webfont.name === '';
        },
        ...mapState({
            fonts: state => state.fonts,
            baseURL: state => state.baseURL,
            fontSizes: state => state.fontSizes,
            lineHeightDefault: state => state.lineHeightDefault,
            letterSpacingDefault: state => state.letterSpacingDefault
        })
    },
    mounted() {
        this.reset();
    },
    methods: {
        reset() {
            this.uploadError = null;
            this.deleteFont = '';
            this.webfont.url = '';
            this.webfont.name = '';
        },
        getFiles(e) {
            const files = e.target.files;
            if (!files) return;
            [...files].forEach(f => {
                this.getFontName(f);
            });
        },
        getFontName(f) {
            let reader = new FileReader();
            let t = this;
            reader.onload = function(e) {
                let font = openType.parse(e.target.result);
                if (font.supported) {
                    t.upload({
                        name: font.names.fullName.en,
                        size: f.size,
                        file: f
                    });
                }
            };
            reader.onerror = function(e) {
                alert('Error: ' + e);
            };
            reader.readAsArrayBuffer(f);
        },
        upload(font) {
            const url = `${this.baseURL}/upload`;
            const formData = new FormData();
            formData.append('file', font.f);
            axios
                .post(url, formData)
                .then(() => {
                    delete font.file; // remove file since no longer need it
                    font.lineHeight = this.lineHeightDefault; // add defaults for new font
                    font.letterSpacing = this.letterSpacingDefault; // add defaults for new font
                    this.$store.commit('addFont', font);
                })
                .catch(() => {
                    alert('Unable to upload font: ${file.fontName');
                });
        },
        removeFont() {
            this.fonts = this.fonts.filter(f => {
                return f.name !== this.deleteFont;
            });
            this.deleteFont = '';
        },
        saveWebFont() {
            if (this.formInvalid) {
                this.webfont.urlError = this.webfont.url
                    ? null
                    : 'This field is required';
                this.webfont.nameError = this.webfont.name
                    ? null
                    : 'This field is required';
            } else {
                const url = this.webfont.url;
                if (
                    url.includes('googleapis.com') ||
                    url.includes('typekit.net') ||
                    url.includes('typography.com')
                ) {
                    this.$store.commit('addFont', {
                        name: this.webfont.name,
                        size: 1,
                        lineHeight: this.lineHeightDefault,
                        letterSpacing: this.letterSpacingDefault
                    });
                    this.clearWebfont();
                } else {
                    this.webfont.urlError =
                        'URL must be from typekit, google or typography';
                }
            }
        },
        clearWebfont() {
            this.webfont.urlError = null;
            this.webfont.nameError = null;
            this.webfont.url = '';
            this.webfont.name = '';
        }
    }
};
</script>

<style scoped>
.fileContainer {
    overflow: hidden;
    position: relative;
}

.fileContainer [type='file'] {
    cursor: inherit;
    color: black;
    display: block;
    font-size: 999px;
    filter: alpha(opacity=0);
    min-height: 100%;
    min-width: 100%;
    opacity: 0;
    position: absolute;
    right: 0;
    text-align: right;
    top: 0;
}
.fileContainer {
    float: left;
}
.fileContainer [type='file'] {
    cursor: pointer;
}
.uploadWrapper {
    min-height: 5px;
}
.totals {
    display: flex;
    align-items: center;
}
.totals res-icon {
    margin-left: 5px;
}
.totals res-badge {
    margin-left: 10px;
}
form res-input {
    margin-bottom: 20px;
}
</style>
