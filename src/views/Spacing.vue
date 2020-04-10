<template>
    <section class="l-content">
        <h2>Choose your spacing scale</h2>

        <div>
            <p>How spacing and sizing works in harmony tkktktktktkt.</p>
            <p>
                Use a small scale for smaller space between elements, medium for
                medium, and large for large tktk. We recommend starting with a
                medium scale. That's the default. You can preview scales below.
            </p>
        </div>

        <p>Currently set to: <strong>Medium</strong></p>
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

        <hr />
        <div class="c-tab-nav margin-sm">
            <span class="c-tab">Small</span>
            <span class="c-tab c-tab-active">Medium</span>
            <span class="c-tab">Large</span>
        </div>

        <div class="c-panel" style="display: flex;">
            <div>
                <res-table>
                    <label
                        >Medium
                        <res-badge
                            design="gold"
                            size="smaller"
                            style="vertical-align: middle; margin-left: 8px;"
                            >selected</res-badge
                        ></label
                    >

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
                                <td>space 1</td>
                                <td>2px</td>
                                <td>
                                    <div
                                        style="height:2px;width:2px;background-color:#ff98d6;"
                                    ></div>
                                </td>
                            </tr>
                            <tr>
                                <td>space 2</td>
                                <td>4px</td>
                                <td>
                                    <div
                                        style="height:4px;width:4px;background-color:#ff98d6;"
                                    ></div>
                                </td>
                            </tr>
                            <tr>
                                <td>space 3</td>
                                <td>8px</td>
                                <td>
                                    <div
                                        style="height:8px;width:8px;background-color:#ff98d6;"
                                    ></div>
                                </td>
                            </tr>
                            <tr>
                                <td>space 4</td>
                                <td>12px</td>
                                <td>
                                    <div
                                        style="height:12px;width:12px;background-color:#ff98d6;"
                                    ></div>
                                </td>
                            </tr>
                            <tr>
                                <td>space 5</td>
                                <td>16px</td>
                                <td>
                                    <div
                                        style="height:16px;width:16px;background-color:#ff98d6;"
                                    ></div>
                                </td>
                            </tr>
                            <tr>
                                <td>space 6</td>
                                <td>24px</td>
                                <td>
                                    <div
                                        style="height:24px;width:24px;background-color:#ff98d6;"
                                    ></div>
                                </td>
                            </tr>
                            <tr>
                                <td>space 7</td>
                                <td>32px</td>
                                <td>
                                    <div
                                        style="height:32px;width:32px;background-color:#ff98d6;"
                                    ></div>
                                </td>
                            </tr>
                            <tr>
                                <td>space 8</td>
                                <td>44px</td>
                                <td>
                                    <div
                                        style="height:44px;width:44px;background-color:#ff98d6;"
                                    ></div>
                                </td>
                            </tr>
                            <tr>
                                <td>space 9</td>
                                <td>60px</td>
                                <td>
                                    <div
                                        style="height:60px;width:60px;background-color:#ff98d6;"
                                    ></div>
                                </td>
                            </tr>
                            <tr>
                                <td>space 10</td>
                                <td>84px</td>
                                <td>
                                    <div
                                        style="height:84px;width:84px;background-color:#ff98d6;"
                                    ></div>
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
                    <router-link
                        to="/edit_spacing_scale"
                        style="text-decoration: none;"
                        >Edit Scale</router-link
                    >
                </p>
            </div>
        </div>
        <PrevNext :prevLink="'categories'" :nextLink="'palette'"></PrevNext>
    </section>
</template>

<script>
import PrevNext from '@/components/PrevNext';

export default {
    name: 'Spacing',
    components: {
        PrevNext
    }
};
</script>

<style scoped></style>
