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
                <form
                    enctype="multipart/form-data"
                    novalidate
                    v-if="isInitial || isSaving"
                >
                    <div class="uploadWrapper">
                        <label class="fileContainer">
                            Select Fonts
                            <input
                                type="file"
                                :name="uploadFieldName"
                                :disabled="isSaving"
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

            <!--            <div v-show="radioChoice === 'URL'">-->
            <!--                <res-input>-->
            <!--                    <label-->
            <!--                        >Include from URL (url from Google, Hoefler, Typekit,-->
            <!--                        etc)</label-->
            <!--                    >-->
            <!--                    <input type="file" />-->
            <!--                    <res-button slot="outer-right" design="primary"-->
            <!--                        ><button>Submit</button></res-button-->
            <!--                    >-->
            <!--                </res-input>-->
            <!--            </div>-->
        </div>

        <div v-if="totalSize > 0">
            <hr />
            <div style="font-size: 24px;">
                <p style="font-size: 12px;">
                    <i>Fonts below illustrated uploaded fonts, not defaults</i>
                </p>

                <div>
                    <p v-for="(file, fileIdx) in files" :key="fileIdx">
                        {{ file.fontName }} - ({{ file.fileSize | kb }})
                        <res-icon
                            name="x-circle"
                            size="small"
                            style="vertical-align: middle;"
                            @click="removeFile(file)"
                        ></res-icon>
                    </p>
                </div>
            </div>
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
            <div>
                <res-button design="secondary">
                    <res-icon name="upload"></res-icon><button>Upload Fonts</button></res-button>
            </div>
        </div>

        <hr />
        <PrevNext :prevLink="'index'" :nextLink="'typesizing'"></PrevNext>
    </section>
</template>

<script>
import PrevNext from '@/components/PrevNext';
// const BASE_URL = 'https://themui-backend.herokuapp.com';
const STATUS_INITIAL = 0,
    STATUS_SAVING = 1;
// STATUS_SUCCESS = 2,
// STATUS_FAILED = 3;
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
        fileTypes: ['otf', 'ttf', 'woff']
    }),
    computed: {
        isInitial() {
            return this.currentStatus === STATUS_INITIAL;
        },
        isSaving() {
            return this.currentStatus === STATUS_SAVING;
        },
        totalSize() {
            return this.files.reduce((accum, item) => accum + item.fileSize, 0);
        },
        loadTime() {
            return this.totalSize <= 200000
                ? 'fast'
                : this.totalSize <= 400000
                ? 'moderate'
                : 'slow';
        },
        loadDesign() {
            return this.totalSize <= 200000
                ? 'grass'
                : this.totalSize <= 400000
                ? 'gold'
                : 'apple';
        }
    },
    methods: {
        reset() {
            this.currentStatus = STATUS_INITIAL;
            this.uploadError = null;
            this.files = [];
            this.totalSize = 0;
        },
        getFiles(e) {
            const fonts = e.target.files;
            if (!fonts) return;
            [...fonts].forEach(f => {
                this.processFile(f);
            });
        },
        processFile(f) {
            let reader = new FileReader();
            let n = this;
            reader.onload = function(e) {
                let font = openType.parse(e.target.result);
                if (font.supported) {
                    n.files.push({
                        fontName: font.names.fullName.en,
                        fileSize: f.size,
                        fileName: f.name,
                        file: f,
                        uploaded: false
                    });
                }
            };
            reader.onerror = function(e) {
                console.log('error', e);
            };
            reader.readAsArrayBuffer(f);
        },
        removeFile(file) {
            this.files = this.files.filter(f => {
                return f != file;
            });
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
    margin: 25px 0;
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
</style>
