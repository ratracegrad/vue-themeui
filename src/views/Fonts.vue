<template>
  <section class="l-content">
    <div>
      <h2>Upload Your fonts</h2>
      <p>
        This help text should describe our recommendations around fonts. We will
        not impose any limits, but we will show the user how heavy their font
        load will be based on the number of fonts uploaded.
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
            ><input type="radio" name="r1" value="URL" v-model="radioChoice" />
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
          <h1>Upload fonts</h1>
          <div class="dropbox">
            <input
              type="file"
              :name="uploadFieldName"
              :disabled="isSaving"
              id="fontFile"
              @change="
                filesChange($event.target.name, $event.target.files);
                fileCount = $event.target.files.length;
              "
              accept="font*"
            />
            <p v-if="isInitial">
              Drag your file(s) here to begin<br />
              or click to browse
            </p>
            <p v-if="isSaving">Uploading {{ fileCount }} files</p>
          </div>
        </form>

        <!--SUCCESS-->
        <div v-if="isSuccess">
          <h2>Uploaded {{ uploadedFiles.length }} file(s) successfully.</h2>
          <p>
            <a href="javascript:void(0)" @click="reset()">Upload again</a>
          </p>
          <ul class="list-unstyled">
            <li v-for="(item, idx) in uploadedFiles" :key="idx">
              <!--              <img :src="item.url" class="img-responsive img-thumbnail" :alt="item.originalName">-->
              {{ item.originalname }} - {{ item.path }}
            </li>
          </ul>
        </div>
        <!--FAILED-->
        <div v-if="isFailed">
          <h2>Uploaded failed.</h2>
          <p>
            <a href="javascript:void(0)" @click="reset()">Try again</a>
          </p>
          <pre>{{ uploadError }}</pre>
        </div>
      </div>

      <div v-show="radioChoice === 'URL'">
        <res-input>
          <label
            >Include from URL (url from Google, Hoefler, Typekit, etc)</label
          >
          <input type="text" />
          <res-button slot="outer-right" design="primary"
            ><button>Submit</button></res-button
          >
        </res-input>
      </div>
    </div>

    <hr />

    <div style="font-size: 24px;">
      <p style="font-size: 12px;">
        <i>Fonts below illustrated uploaded fonts, not defaults</i>
      </p>
      <p style="font-family: Graphik; font-weight: 400;">
        Graphik-Regular
        <res-icon
          name="x-circle"
          size="small"
          res-modal-open="modal1"
          style="vertical-align: middle;"
        ></res-icon>
      </p>

      <res-modal id="modal1" close-on-bg-click="">
        <div>
          <p style="margin-bottom: 1rem;">Delete Graphik-Regular?</p>
          <res-button
            id="modal-close"
            design="secondary"
            res-modal-close="modal1"
            ><button>Delete Font</button></res-button
          >
          <res-button
            id="modal-close"
            res-modal-close="modal1"
            style="margin-left: 1rem;"
          >
            <res-icon name="x"></res-icon><button>Cancel</button></res-button
          >
        </div>
      </res-modal>

      <p class="graphik-bold">
        Graphik-Bold
        <res-icon
          name="x-circle"
          size="small"
          style="vertical-align: middle;"
          res-modal-open="modal2"
        ></res-icon>
      </p>

      <res-modal id="modal2" close-on-bg-click="">
        <div>
          <p style="margin-bottom: 1rem;">Delete Graphik-Bold?</p>
          <res-button
            id="modal-close"
            design="secondary"
            res-modal-close="modal2"
            ><button>Delete Font</button></res-button
          >
          <res-button
            id="modal-close"
            res-modal-close="modal2"
            style="margin-left: 1rem;"
          >
            <res-icon name="x"></res-icon><button>Cancel</button></res-button
          >
        </div>
      </res-modal>

      <p class="lora-regular">
        Lora
        <res-icon
          name="x-circle"
          size="small"
          style="vertical-align: middle;"
          res-modal-open="modal3"
        ></res-icon>
      </p>

      <res-modal id="modal3" close-on-bg-click="">
        <div>
          <p style="margin-bottom: 1rem;">Delete Lora?</p>
          <res-button
            id="modal-close"
            design="secondary"
            res-modal-close="modal3"
            ><button>Delete Font</button></res-button
          >
          <res-button
            id="modal-close"
            res-modal-close="modal3"
            style="margin-left: 1rem;"
          >
            <res-icon name="x"></res-icon><button>Cancel</button></res-button
          >
        </div>
      </res-modal>

      <p class="lora-bold">
        Lora-Bold
        <res-icon
          name="x-circle"
          size="small"
          style="vertical-align: middle;"
          res-modal-open="modal4"
        ></res-icon>
      </p>

      <res-modal id="modal4" close-on-bg-click="">
        <div>
          <p style="margin-bottom: 1rem;">Delete Lora-Bold?</p>
          <res-button
            id="modal-close"
            design="secondary"
            res-modal-close="modal4"
            ><button>Delete Font</button></res-button
          >
          <res-button
            id="modal-close"
            res-modal-close="modal4"
            style="margin-left: 1rem;"
          >
            <res-icon name="x"></res-icon><button>Cancel</button></res-button
          >
        </div>
      </res-modal>
    </div>
    <p>
      <strong>Total File Size: 200kb</strong>
      <res-icon
        id="medium-font-load-tooltip"
        name="info"
        size="small"
        style="vertical-align: text-bottom;"
      ></res-icon>
    </p>
    <res-dropdown for="medium-font-load-tooltip"
      >file size range for "medium" is tktk</res-dropdown
    >
    <div>
      <res-badge size="medium" design="gold">Load Time: Medium</res-badge>
    </div>

    <hr />

    <div>
      <router-link to="/categories" style="text-decoration: none;"
        ><res-button design="secondary"
          ><button>Next</button></res-button
        ></router-link
      >
    </div>
  </section>
</template>

<script>
import * as axios from "axios";

// const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://themui-backend.herokuapp.com";
const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_SUCCESS = 2,
  STATUS_FAILED = 3;

export default {
  name: "Fonts",
  data: () => ({
    radioChoice: null,
    uploadedFiles: [],
    uploadError: null,
    currentStatus: null,
    uploadFieldName: "fonts"
  }),
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    }
  },
  methods: {
    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
    },
    save(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;

      this.upload(formData)
        .then(x => {
          this.uploadedFiles = [].concat(x);
          this.currentStatus = STATUS_SUCCESS;
        })
        .catch(err => {
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        });
    },
    filesChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();

      if (!fileList.length) return;

      // append the files to FormData
      // Array.from(Array(fileList.length).keys()).map(x => {
      //   console.log(fieldName, fileList[x], fileList[x].name);
      //   formData.append(fieldName, fileList[x], fileList[x].name);
      // });
      formData.append("file", fileList[0]);

      // save it
      this.save(formData);
    },
    upload(formData) {
      const url = `${BASE_URL}/upload`;
      console.log(`url: ${url}`);
      return (
        axios
          .post(url, formData)
          // get data
          .then(x => {
            console.log("------ x");
            console.log(x);
            return x.data;
          })
          // add url field
          .then(x => {
            console.log("2nd then");
            return Object.assign({}, x.file, {
              url: `${BASE_URL}/uploads/${x.filename}`
            });
            // x.map(img => {
            //   console.log('===== img');
            //   console.log(img);
            //   return Object.assign({}, img, { url: `${BASE_URL}/upload/${img.id}` })
            // })
          })
      );
    }
  },
  mounted() {
    this.reset();
  }
};
</script>

<style scoped>
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
</style>
