import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
        meta: { typography: false, tokens: false, colors: false }
    },
    {
        path: "/fonts",
        name: "Fonts",
        meta: { typography: true, tokens: false, colors: false },
        component: () =>
            import(/* webpackChunkName: "fonts" */ "../views/Fonts.vue")
    },
    {
        path: "/typesizing",
        name: "Type Sizing",
        meta: { typography: true, tokens: false, colors: false },
        component: () =>
            import(/* webpackChunkName: "sizing" */ "../views/TypeSizing.vue")
    },
    {
        path: "/typography",
        name: "Typography",
        meta: { typography: true, tokens: false, colors: false },
        component: () =>
            import(
                /* webpackChunkName: "typography" */ "../views/Typography.vue"
            )
    },

    {
        path: "/categories",
        name: "Categories",
        meta: { typography: true, tokens: true, colors: false },
        component: () =>
            import(
                /* webpackChunkName: "categories" */ "../views/Categories.vue"
            )
    },
    {
        path: "/headings",
        name: "Headings",
        meta: { typography: true, tokens: true, colors: false },
        component: () =>
            import(/* webpackChunkName: "headings" */ "../views/Headings.vue")
    },
    {
        path: "/body",
        name: "Body",
        meta: { typography: true, tokens: true, colors: false },
        component: () =>
            import(/* webpackChunkName: "body" */ "../views/Body.vue")
    },
    {
        path: "/meta",
        name: "Meta",
        meta: { typography: true, tokens: true, colors: false },
        component: () =>
            import(/* webpackChunkName: "meta" */ "../views/Meta.vue")
    },
    {
        path: "/ui",
        name: "UI",
        meta: { typography: true, tokens: true, colors: false },
        component: () => import(/* webpackChunkName: "ui" */ "../views/UI.vue")
    },
    {
        path: "/palette",
        name: "Palette",
        meta: { typography: false, tokens: false, colors: true },
        component: () =>
            import(/* webpackChunkName: "palette" */ "../views/Palette.vue")
    },
    {
        path: "/colorgroups",
        name: "ColorGroups",
        meta: { typography: false, tokens: false, colors: true },
        component: () =>
            import(
                /* webpackChunkName: "colorgroups" */ "../views/ColorGroups.vue"
            )
    },
    {
        path: "/edittypescale",
        name: "Edit Type Scale",
        meta: { typography: true, tokens: false, colors: false },
        component: () =>
            import(
                /* webpackChunkName: "sizing" */ "../views/EditTypeScale.vue"
            )
    },
    {
        path: "/spacing",
        name: "Spacing",
        meta: { typography: false, tokens: false, colors: false },
        component: () =>
            import(/* webpackChunkName: "spacing" */ "../views/Spacing.vue")
    },
    {
        path: "/lora",
        name: "Lora",
        meta: { typography: true, tokens: false, colors: false },
        component: () =>
            import(/* webpackChunkName: "lora" */ "../views/Lora.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
