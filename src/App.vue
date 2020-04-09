<template>
    <span id="app">
        <main class="l-main" v-if="!this.$route.path.includes('menu')">
            <app-navigation></app-navigation>
            <router-view />
        </main>
        <router-view v-else></router-view>
    </span>
</template>

<script>
import AppNavigation from "@/components/app-navigation";
export default {
    components: {
        AppNavigation
    }
};
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
