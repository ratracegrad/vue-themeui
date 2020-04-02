<template>
  <section class="l-content">
    <h2>Choose your type sizing</h2>

    <div>
      <p>
        Scales affect your typography ttktktktktk. Scale choice is important
        because blah blah blah. Learn about scale options below. Let's describe
        the breakpoint stuff too.
      </p>
    </div>
    <p>Current scale: <strong>Small</strong></p>

    <div class="flex-center margin-lg">
      <res-select style="margin-right: 8px;"
        ><select name="s1" id="initial-id"
          ><option placeholder="">Select scale</option
          ><option value="Small">Small</option
          ><option value="Medium">Medium</option
          ><option value="Large">Large</option></select
        ></res-select
      >
      <res-button design="primary"><button>Save</button></res-button>
    </div>
    <p class="margin-lg">preview scales below tktkt</p>
    <hr />
    <div class="c-tab-nav margin-sm">
      <span class="c-tab c-tab-active">Small</span>
      <span class="c-tab">Medium</span> <span class="c-tab">Large</span>
    </div>
    <div class="c-panel">
      <h3>
        <span>Small (condensed)</span
        ><res-badge
          design="gold"
          size="smaller"
          style="vertical-align: middle; margin-left: 8px;"
          >selected</res-badge
        >
      </h3>
      <p class="margin-lg">
        The small scale in Harmony is based on a minor third scale with a 1.125
        Base font size. Each step on the scale increases by TK TK. The mobile
        sizes are TK TK smaller.
      </p>

      <div class="margin-sm">
        <res-toggle-buttons>
          <res-button value="1">
            <res-icon name="phone"></res-icon><button></button
          ></res-button>
          <res-button value="2">
            <res-icon name="tablet"></res-icon><button></button
          ></res-button>
          <res-button value="3" active="">
            <res-icon name="desktop"></res-icon><button></button
          ></res-button>
        </res-toggle-buttons>
      </div>
      <res-table id="my-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Size (px)</th>
              <th>Example</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>size1</td>
              <td>6px</td>
              <td style="font-size: 6px;">
                Almost before we knew it, we had left the ground.
              </td>
            </tr>
            <tr>
              <td>size2</td>
              <td>8px</td>
              <td style="font-size: 8px;">
                Almost before we knew it, we had left the ground.
              </td>
            </tr>
            <tr>
              <td>size3</td>
              <td>10px</td>
              <td style="font-size: 10px;">
                Almost before we knew it, we had left the ground.
              </td>
            </tr>
            <tr>
              <td>size4</td>
              <td>12px</td>
              <td style="font-size: 12px;">
                Almost before we knew it, we had left the ground.
              </td>
            </tr>
            <tr>
              <td>size5</td>
              <td>14px</td>
              <td style="font-size: 14px;">
                Almost before we knew it, we had left the ground.
              </td>
            </tr>
            <tr>
              <td>size6</td>
              <td>16px</td>
              <td style="font-size: 16px;">
                Almost before we knew it, we had left the ground.
              </td>
            </tr>
            <tr>
              <td>size7</td>
              <td>18px</td>
              <td style="font-size: 18px;">
                Almost before we knew it, we had left the ground.
              </td>
            </tr>
            <tr>
              <td>size8</td>
              <td>24px</td>
              <td style="font-size: 24px;">
                Almost before we knew it, we had left the ground.
              </td>
            </tr>
            <tr>
              <td>size9</td>
              <td>32px</td>
              <td style="font-size: 32px;">
                Almost before we knew it, we had left the ground.
              </td>
            </tr>
            <tr>
              <td>size10</td>
              <td>44px</td>
              <td style="font-size: 44px;">
                Almost before we knew it, we had left the ground.
              </td>
            </tr>
            <tr>
              <td>size11</td>
              <td>52px</td>
              <td style="font-size: 52px;">
                Almost before we knew it, we had left the ground.
              </td>
            </tr>
            <tr>
              <td>size12</td>
              <td>64px</td>
              <td style="font-size: 64px;">
                Almost before we knew it, we had left the ground.
              </td>
            </tr>
          </tbody>
        </table>
      </res-table>

      <p style="text-align: right; margin-top: 8px;">
        <res-icon
          name="edit"
          size="small"
          style="vertical-align: middle;"
        ></res-icon>
        <router-link to="/EditTypeScale" style="text-decoration: none;"
          >Edit Scale</router-link
        >
      </p>
    </div>

    <div class="c-buttons">
          <router-link to="fonts" style="text-decoration: none;"
            ><res-button style="margin-right: 8px;" design="secondary"
                    ><button>Back</button></res-button></router-link>
          <router-link to="/typography" style="text-decoration: none;"
            ><res-button design="secondary"
              ><button>Next</button></res-button
            ></router-link
          >
        </div>
  </section>
</template>

<script>
export default {
  name: "Type Sizing"
};
</script>

<style scoped></style>
