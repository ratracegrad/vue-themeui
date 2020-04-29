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
                    <div class="uploadWrapper">
                        <label class="fileContainer">
                            Select Fonts
                            <input
                                type="file"
                                :name="uploadFieldName"
                                id="fontFile"
                                ref="file"
                                multiple
                                accept=".ttf,.woff,.woff2,.otf"
                                @change="getFiles"
                            />
                        </label>
                    </div>
                </form>
            </div>

            <div v-show="radioChoice === 'URL'">
                <form @submit.prevent="saveWebFont">
                    <div>
                        <res-input required :error="webfont.urlError">
                            <label for="webfontUrl">URL</label>
                            <input
                                type="text"
                                id="webfontUrl"
                                v-model="webfont.url"
                            />
                        </res-input>
                    </div>
                    <div>
                        <res-input required :error="webfont.nameError">
                            <label for="webfontName">Font Name:</label>
                            <input
                                type="text"
                                id="webfontName"
                                v-model="webfont.name"
                            />
                        </res-input>
                    </div>
                    <div class="spaceAbove">
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
            <p v-for="(file, fileIdx) in files" :key="fileIdx">
                {{ file.fontName }} - ({{ file.fileSize | kb }})
                <res-icon
                    res-modal-open="deleteFont"
                    name="trash"
                    size="small"
                    style="vertical-align: middle;"
                    @click="deleteFont = file.fontName"
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

        <hr />
        <PrevNext :prevLink="'index'" :nextLink="'typesizing'"></PrevNext>
    </section>
</template>

<script>
import * as axios from 'axios';
import PrevNext from '@/components/PrevNext';
const BASE_URL = 'https://themui-backend.herokuapp.com';
import openType from 'opentype.js';
export default {
    name: 'Fonts',
    components: {
        PrevNext
    },
    data: () => ({
        radioChoice: null,
        uploadError: null,
        currentStatus: null,
        uploadFieldName: 'fonts',
        files: [],
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
            return this.files.reduce((accum, item) => accum + item.fileSize, 0);
        },
        loadTime() {
            return this.totalSize <= 400000
                ? 'fast'
                : this.totalSize <= 1000000
                ? 'moderate'
                : 'slow';
        },
        loadDesign() {
            return this.totalSize <= 400000
                ? 'grass'
                : this.totalSize <= 1000000
                ? 'gold'
                : 'apple';
        },
        formInvalid() {
            return this.webfont.url === '' || this.webfont.name === '';
        }
    },
    methods: {
        reset() {
            this.uploadError = null;
            this.files = [];
            this.deleteFont = '';
            this.webfont.url = '';
            this.webfont.name = '';
        },
        getFiles(e) {
            const fonts = e.target.files;
            if (!fonts) return;
            [...fonts].forEach(f => {
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
                        fontName: font.names.fullName.en,
                        fileSize: f.size,
                        fileName: f.name,
                        file: f
                    });
                }
            };
            reader.onerror = function(e) {
                alert('Error: ' + e);
            };
            reader.readAsArrayBuffer(f);
        },
        upload(file) {
            const url = `${BASE_URL}/upload`;
            const formData = new FormData();
            formData.append('file', file.f);
            let t = this;
            axios
                .post(url, formData)
                .then(() => {
                    t.files.push(file);
                })
                .catch(() => {
                    alert('Unable to upload font: ${file.fontName');
                });
        },
        removeFont() {
            this.files = this.files.filter(f => {
                return f.fontName !== this.deleteFont;
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
                    this.files.push({
                        fontName: this.webfont.name,
                        fileSize: 1
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
    },
    mounted() {
        this.reset();
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
    background: #ffe068;
    border-radius: 5px;
    float: left;
    padding: 10px 17px;
}
.fileContainer [type='file'] {
    cursor: pointer;
}
.uploadWrapper {
    min-height: 25px;
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
