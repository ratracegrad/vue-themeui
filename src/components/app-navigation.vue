<template>
    <aside class="l-sidebar">
        <nav class="c-nav">
            <ChorusLogo></ChorusLogo>
            <ul>
                <li>
                    <router-link to="/">Intro</router-link>
                </li>

                <li
                    class="expandable"
                    v-on:click="expandTypography = !expandTypography"
                >
                    Typography<res-icon
                        name="down"
                        size="small"
                        v-show="!expandTypography"
                    ></res-icon>
                    <res-icon
                        name="up"
                        size="small"
                        v-show="expandTypography"
                    ></res-icon>
                </li>
                <div
                    v-bind:class="{ show: expandTypography }"
                    class="typography-list"
                >
                    <li class="sub">
                        <router-link to="/fonts">Fonts</router-link>
                    </li>
                    <li class="sub">
                        <router-link to="/typesizing">Sizes</router-link>
                    </li>

                    <li class="sub">
                        <router-link to="typography"
                            >Character Spacing</router-link
                        >
                    </li>

                    <li
                        class="sub expandable"
                        v-on:click="expandTokens = !expandTokens"
                    >
                        Tokens<res-icon
                            name="down"
                            size="small"
                            v-show="!expandTokens"
                        ></res-icon>
                        <res-icon
                            name="up"
                            size="small"
                            v-show="expandTokens"
                        ></res-icon>
                    </li>
                    <div
                        v-bind:class="{ show: expandTokens }"
                        class="tokens-list"
                    >
                        <li class="sub sub-sub">
                            <router-link to="categories"
                                >Categories</router-link
                            >
                        </li>

                        <li
                            class="sub sub-sub expandable"
                            v-on:click="expandHeadings = !expandHeadings"
                        >
                            Headings<res-icon
                                name="down"
                                size="small"
                                v-show="!expandHeadings"
                            ></res-icon>
                            <res-icon
                                name="up"
                                size="small"
                                v-show="expandHeadings"
                            ></res-icon>
                        </li>
                        <div
                            v-bind:class="{ show: expandHeadings }"
                            class="tokens-list"
                        >
                            <li class="sub sub-sub-sub">
                                <router-link to="headlines"
                                    >Headlines</router-link
                                >
                            </li>
                            <li class="sub sub-sub-sub">
                                <router-link to="#"
                                    >Section Headings</router-link
                                >
                            </li>
                            <li class="sub sub-sub-sub">
                                <router-link to="#">H1-H6</router-link>
                            </li>
                            <li class="sub sub-sub-sub">
                                <router-link to="#">Sub-headings</router-link>
                            </li>
                        </div>
                        <li class="sub sub-sub">
                            <router-link to="body">Body</router-link>
                        </li>
                        <li class="sub sub-sub">
                            <router-link to="meta">Meta</router-link>
                        </li>
                        <li class="sub sub-sub">
                            <router-link to="ui">UI</router-link>
                        </li>
                    </div>
                </div>

                <li><router-link to="/spacing">Spacing</router-link></li>

                <li
                    class="expandable"
                    v-on:click="expandColors = !expandColors"
                >
                    Colors<res-icon
                        name="down"
                        size="small"
                        v-show="!expandColors"
                    ></res-icon>
                    <res-icon
                        name="up"
                        size="small"
                        v-show="expandColors"
                    ></res-icon>
                </li>
                <div v-bind:class="{ show: expandColors }" class="colors-list">
                    <li class="sub">
                        <router-link to="/palette">Palette</router-link>
                    </li>
                    <li class="sub">
                        <router-link to="/colorgroups"
                            >Color Groups</router-link
                        >
                    </li>
                </div>
            </ul>
        </nav>
    </aside>
</template>

<script>
import ChorusLogo from './ChorusLogo';

// to do: abstract all of this
export default {
    name: 'app-navigation',
    components: {
        ChorusLogo
    },
    data: function() {
        return {
            expandTypography: false,
            expandTokens: false,
            expandColors: false,
            expandHeadings: false
        };
    },
    watch: {
        $route(route) {
            this.expandTypography = route.meta.typography;
            this.expandTokens = route.meta.tokens;
            this.expandColors = route.meta.colors;
            this.expandHeadings = route.meta.headings;
        }
    }
};
</script>

<style>
.router-link-exact-active {
    font-weight: bold;
    background-color: #fdcb28;
}
</style>
