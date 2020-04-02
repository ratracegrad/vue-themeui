<template>
  <section class="l-content">
    <h2>Edit your type scale</h2>
    <div>
      <p>
        TKTK why and how you might edit this scale. We don't recommend it, but
        you can. Try using
        <a href="https://www.modularscale.com/">modularscale.com</a> to build
        one.
      </p>
    </div>
    <div class="c-panel">
      <res-table id="edit-table">
        <label>Small (condensed)</label>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>wide: &gt;1400</th>
              <th>mid: &gt;1400</th>
              <th>narrow: &lt;650 </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>size 1</td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
            </tr>
            <tr>
              <td>size 2</td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
            </tr>
            <tr>
              <td>size 3</td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
            </tr>
            <tr>
              <td>size 4</td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
            </tr>
            <tr>
              <td>size 5</td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
            </tr>
            <tr>
              <td>size 6</td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
            </tr>
            <tr>
              <td>size 7</td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
            </tr>
            <tr>
              <td>size 8</td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
            </tr>
            <tr>
              <td>size 9</td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
            </tr>
            <tr>
              <td>size 10</td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
            </tr>
            <tr>
              <td>size 11</td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
            </tr>
            <tr>
              <td>size 12</td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
              <td>
                <res-input><input type="text" placeholder="12"/></res-input>
              </td>
            </tr>
          </tbody>
        </table>
      </res-table>
    </div>
    <div class="c-buttons c-buttons-save">
    <res-button design="primary" style="margin-right: 8px"><button>Save</button></res-button>
    <router-link to="/typesizing" style="text-decoration: none;">
        <res-button design="secondary"><button>Back</button></res-button>
    </router-link>
  </div>
  </section>
</template>
<script>
export default {
  name: "EditTypeScale"
};
</script>
<style scoped></style>
