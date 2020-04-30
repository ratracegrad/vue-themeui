import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from "./store";
import './plugins/resonance';
import './assets/css/shared_styles.css';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

Vue.filter('kb', val => {
    if (val === 0) return '0 KB';
    const n = Math.floor(Math.log(val) / Math.log(1024));
    const size =
        1 * (val / Math.pow(1024, n)).toFixed(2) +
        ' ' +
        ['B', 'KB', 'MB', 'GB', 'TB'][n];
    return size;
});

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');
