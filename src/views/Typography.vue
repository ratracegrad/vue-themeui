<template>
  <section class="l-content l-content-typography">
    <h1>Character Spacing</h1>
    <p>Set the values associated with your chosen fonts.</p>
    <div class="c-tab-nav margin-xl">
      <span class="c-tab" id="top">Jump to:</span>
      <span class="c-tab"><a href="#graphik">Graphik</a></span>
      <span class="c-tab lora-regular"><a href="#lora">Lora</a></span>
    </div>
    <div class="c-panel c-panel-typography" id="graphik">
      <h2 class="margin-xl" style="margin-top: 0;">
        Graphik <span class="type-regular">Regular, Bold</span>
      </h2>

      <div class="flex margin-xl">
        <div style="flex-basis: 25%;">
          <h3 style="margin-top: 0; margin-bottom: 4px;">Line Height</h3>
          <p>Set four contexts.</p>
        </div>
        <div style="flex-basis: 75%;">
          <div class="flex margin-xl">
            <div style="flex-basis: 25%; display: flex; align-items: baseline;">
              <div
                class="flex"
                style="align-items: center; justify-content: space-between;"
              >
                <label style="justify-content: center; font-weight: bold;"
                  >Tight</label
                >
                <res-input
                  ><input
                    type="text"
                    :placeholder="lineHeight.tight"
                    v-model="lineHeight.tight"
                /></res-input>
              </div>
            </div>
            <span
              style="font-size:44px; flex-basis: 75%; margin-left: 12px; font-weight: bold;"
              v-bind:style="{ lineHeight: lineHeight.tight }"
              >Tight applies to larger font sizes, like those used in
              headlines</span
            >
          </div>

          <div class="flex margin-xl">
            <div style="flex-basis: 25%; display: flex; align-items: baseline;">
              <div
                class="flex"
                style="align-items: center; justify-content: space-between;"
              >
                <label style="justify-content: center; font-weight: bold;"
                  >Medium</label
                >
                <res-input
                  ><input
                    type="text"
                    :placeholder="lineHeight.medium"
                    v-model="lineHeight.medium"
                /></res-input>
              </div>
            </div>
            <span
              style="font-size:16px; flex-basis: 75%; margin-left: 12px;"
              v-bind:style="{ lineHeight: lineHeight.medium }"
              >This line height applies to medium font sizes. Here's some sample
              text for you to test this value. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.</span
            >
          </div>

          <div class="flex margin-xl">
            <div style="flex-basis: 25%; display: flex; align-items: baseline;">
              <div
                class="flex"
                style="align-items: center; justify-content: space-between;"
              >
                <label style="justify-content: center; font-weight: bold;"
                  >Loose</label
                >
                <res-input
                  ><input
                    type="text"
                    :placeholder="lineHeight.loose"
                    v-model="lineHeight.loose"
                /></res-input>
              </div>
            </div>
            <span
              style="font-size:12px; flex-basis: 75%; margin-left: 12px;"
              v-bind:style="{ lineHeight: lineHeight.loose }"
              >This line height applies to small font sizes. Here's some sample
              text for you to test this value. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.</span
            >
          </div>

          <div class="flex margin-xl">
            <div style="flex-basis: 25%; display: flex; align-items: baseline;">
              <div
                class="flex"
                style="align-items: center; justify-content: space-between;"
              >
                <label style="justify-content: center; font-weight: bold;"
                  >Body</label
                >
                <res-input
                  ><input
                    type="text"
                    :placeholder="lineHeight.body"
                    v-model="lineHeight.body"
                /></res-input>
              </div>
            </div>
            <span
              style="font-size:18px; flex-basis: 75%; margin-left: 12px;"
              v-bind:style="{ lineHeight: lineHeight.body }"
              >This line height applies to the body copy in an article, which we
              think is a little different than other text. Here's some sample
              text for you to test this value.</span
            >
          </div>
        </div>
      </div>

      <div class="flex margin-xl">
        <div style="flex-basis: 25%;">
          <h3 style="margin-top: 0; margin-bottom: 4px;">Letterspacing</h3>
          <p>Set three contexts.</p>
        </div>
        <div style="flex-basis: 75%;">
          <div class="flex margin-xl">
            <div style="flex-basis: 25%; display: flex; align-items: baseline;">
              <div
                class="flex"
                style="align-items: center; justify-content: space-between;"
              >
                <label style="justify-content: center; font-weight: bold;"
                  >Default</label
                >
                <res-input
                  ><input
                    type="text"
                    :placeholder="letterSpacing.default"
                    v-model="letterSpacing.default"
                /></res-input>
              </div>
            </div>
            <span
              style="font-size:16px; flex-basis: 75%; margin-left: 12px;"
              v-bind:style="{ letterSpacing: letterSpacing.default }"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</span
            >
          </div>

          <div class="flex margin-xl">
            <div style="flex-basis: 25%; display: flex; align-items: baseline;">
              <div
                class="flex"
                style="align-items: center; justify-content: space-between;"
              >
                <label style="justify-content: center; font-weight: bold;"
                  >Caps</label
                >
                <res-input
                  ><input
                    type="text"
                    :placeholder="letterSpacing.caps"
                    v-model="letterSpacing.caps"
                /></res-input>
              </div>
            </div>
            <span
              style="font-size:12px; text-transform:uppercase; flex-basis: 75%; margin-left: 12px;"
              v-bind:style="{ letterSpacing: letterSpacing.caps }"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</span
            >
          </div>

          <div class="flex margin-xl">
            <div style="flex-basis: 25%; display: flex; align-items: baseline;">
              <div
                class="flex"
                style="align-items: center; justify-content: space-between;"
              >
                <label style="justify-content: center; font-weight: bold;"
                  >Expressive</label
                >
                <res-input
                  ><input
                    type="text"
                    :placeholder="letterSpacing.expressive"
                    v-model="letterSpacing.expressive"
                /></res-input>
              </div>
            </div>
            <span
              style="font-size:12px; flex-basis: 75%; margin-left: 12px;"
              v-bind:style="{ letterSpacing: letterSpacing.expressive }"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</span
            >
          </div>
        </div>
      </div>
      <div class="c-tab c-tab-top"><a href="#top">Return to top</a></div>
    </div>

    <div class="c-panel c-panel-typography" id="lora">
      <h2 class="margin-xl lora-bold" style="margin-top: 0;">
        Lora <span class="type-regular">Regular, Bold</span>
      </h2>

      <div class="flex margin-xl">
        <div style="flex-basis: 25%;">
          <h3 style="margin-top: 0; margin-bottom: 4px;">Line Height</h3>
          <p>Set four contexts.</p>
        </div>
        <div style="flex-basis: 75%;">
          <div class="flex margin-xl">
            <div style="flex-basis: 25%; display: flex; align-items: baseline;">
              <div
                class="flex"
                style="align-items: center; justify-content: space-between;"
              >
                <label style="justify-content: center; font-weight: bold;"
                  >Tight</label
                >
                <res-input
                  ><input
                    type="text"
                    :placeholder="lineHeight.tight"
                    v-model="lineHeight.tight"
                /></res-input>
              </div>
            </div>
            <span
              class="lora-bold"
              style="font-size:44px; flex-basis: 75%; margin-left: 12px; font-weight: bold;"
              v-bind:style="{ lineHeight: lineHeight.tight }"
              >Tight applies to larger font sizes, like those used in
              headlines</span
            >
          </div>

          <div class="flex margin-xl">
            <div style="flex-basis: 25%; display: flex; align-items: baseline;">
              <div
                class="flex"
                style="align-items: center; justify-content: space-between;"
              >
                <label style="justify-content: center; font-weight: bold;"
                  >Medium</label
                >
                <res-input
                  ><input
                    type="text"
                    :placeholder="lineHeight.medium"
                    v-model="lineHeight.medium"
                /></res-input>
              </div>
            </div>
            <span
              class="lora-regular"
              style="font-size:16px; flex-basis: 75%; margin-left: 12px;"
              v-bind:style="{ lineHeight: lineHeight.medium }"
              >This line height applies to medium font sizes. Here's some sample
              text for you to test this value. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.</span
            >
          </div>

          <div class="flex margin-xl">
            <div style="flex-basis: 25%; display: flex; align-items: baseline;">
              <div
                class="flex"
                style="align-items: center; justify-content: space-between;"
              >
                <label style="justify-content: center; font-weight: bold;"
                  >Loose</label
                >
                <res-input
                  ><input
                    type="text"
                    :placeholder="lineHeight.loose"
                    v-model="lineHeight.loose"
                /></res-input>
              </div>
            </div>
            <span
              class="lora-regular"
              style="font-size:12px; flex-basis: 75%; margin-left: 12px;"
              v-bind:style="{ lineHeight: lineHeight.loose }"
              >This line height applies to small font sizes. Here's some sample
              text for you to test this value. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.</span
            >
          </div>

          <div class="flex margin-xl">
            <div style="flex-basis: 25%; display: flex; align-items: baseline;">
              <div
                class="flex"
                style="align-items: center; justify-content: space-between;"
              >
                <label style="justify-content: center; font-weight: bold;"
                  >Body</label
                >
                <res-input
                  ><input
                    type="text"
                    :placeholder="lineHeight.body"
                    v-model="lineHeight.body"
                /></res-input>
              </div>
            </div>
            <span
              class="lora-regular"
              style="font-size:18px; flex-basis: 75%; margin-left: 12px;"
              v-bind:style="{ lineHeight: lineHeight.body }"
              >This line height applies to the body copy in an article, which we
              think is a little different than other text. Here's some sample
              text for you to test this value.</span
            >
          </div>
        </div>
      </div>

      <div class="flex">
        <div style="flex-basis: 25%;">
          <h3 style="margin-top: 0; margin-bottom: 4px;">Letterspacing</h3>
          <p>Set three contexts.</p>
        </div>
        <div style="flex-basis: 75%;">
          <div class="flex margin-xl">
            <div style="flex-basis: 25%; display: flex; align-items: baseline;">
              <div
                class="flex"
                style="align-items: center; justify-content: space-between;"
              >
                <label style="justify-content: center; font-weight: bold;"
                  >Default</label
                >
                <res-input
                  ><input
                    type="text"
                    :placeholder="letterSpacing.default"
                    v-model="letterSpacing.default"
                /></res-input>
              </div>
            </div>
            <span
              class="lora-regular"
              style="font-size:16px; flex-basis: 75%; margin-left: 12px;"
              v-bind:style="{ letterSpacing: letterSpacing.default }"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</span
            >
          </div>

          <div class="flex margin-xl">
            <div style="flex-basis: 25%; display: flex; align-items: baseline;">
              <div
                class="flex"
                style="align-items: center; justify-content: space-between;"
              >
                <label style="justify-content: center; font-weight: bold;"
                  >Caps</label
                >
                <res-input
                  ><input
                    type="text"
                    :placeholder="letterSpacing.caps"
                    v-model="letterSpacing.caps"
                /></res-input>
              </div>
            </div>
            <span
              class="lora-regular"
              style="font-size:12px; text-transform:uppercase; flex-basis: 75%; margin-left: 12px;"
              v-bind:style="{ letterSpacing: letterSpacing.caps }"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</span
            >
          </div>

          <div class="flex margin-lg">
            <div style="flex-basis: 25%; display: flex; align-items: baseline;">
              <div
                class="flex"
                style="align-items: center; justify-content: space-between;"
              >
                <label style="justify-content: center; font-weight: bold;"
                  >Expressive</label
                >
                <res-input
                  ><input
                    type="text"
                    :placeholder="letterSpacing.expressive"
                    v-model="letterSpacing.expressive"
                /></res-input>
              </div>
            </div>
            <span
              class="lora-regular"
              style="font-size:12px; flex-basis: 75%; margin-left: 12px;"
              v-bind:style="{ letterSpacing: letterSpacing.expressive }"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</span
            >
          </div>
        </div>
      </div>
      <div class="c-tab c-tab-top"><a href="#top">Return to top</a></div>
    </div>

    <div>
      <res-button design="primary"><button>Save</button></res-button>
    </div>

    <hr />

    <div class="flex" style="justify-content: center;">
      <router-link
        to="/typesizing"
        style="text-decoration: none; margin-right: 8px"
      >
        <res-button design="secondary"><button>Previous</button></res-button>
      </router-link>
      <router-link to="/categories" style="text-decoration: none;">
        <res-button design="secondary"><button>Next</button></res-button>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Typography",
  data: () => ({
    lineHeight: {
      tight: 1.1,
      medium: 1.3,
      loose: 1.5,
      body: 1.7
    },
    letterSpacing: {
      default: "0",
      caps: ".04em",
      expressive: ".02em"
    }
  })
};
</script>

<style scoped></style>
