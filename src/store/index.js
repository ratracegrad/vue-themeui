import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        baseURL: 'https://themui-backend.herokuapp.com',
        fontSizes: {
            fast: 400000,
            moderate: 1000000
        },
        fonts: [],
        currentScale: 'small',
        sizes: {
            small: {
                phone: {
                    'font-size-01': '12px',
                    'font-size-02': '14px',
                    'font-size-03': '16px',
                    'font-size-04': '18px',
                    'font-size-05': '20px',
                    'font-size-06': '22px',
                    'font-size-07': '26px',
                    'font-size-08': '35px',
                    'font-size-09': '45px',
                    'font-size-10': '64px',
                    'font-size-11': '78px',
                    'font-size-12': '136px'
                },
                tablet: {
                    'font-size-01': '12px',
                    'font-size-02': '14px',
                    'font-size-03': '16px',
                    'font-size-04': '18px',
                    'font-size-05': '20px',
                    'font-size-06': '22px',
                    'font-size-07': '26px',
                    'font-size-08': '35px',
                    'font-size-09': '45px',
                    'font-size-10': '64px',
                    'font-size-11': '78px',
                    'font-size-12': '136px'
                },
                desktop: {
                    'font-size-01': '12px',
                    'font-size-02': '14px',
                    'font-size-03': '16px',
                    'font-size-04': '18px',
                    'font-size-05': '20px',
                    'font-size-06': '22px',
                    'font-size-07': '26px',
                    'font-size-08': '35px',
                    'font-size-09': '45px',
                    'font-size-10': '64px',
                    'font-size-11': '78px',
                    'font-size-12': '136px'
                }
            },
            medium: {
                phone: {
                    'font-size-01': '13px',
                    'font-size-02': '14px',
                    'font-size-03': '16px',
                    'font-size-04': '18px',
                    'font-size-05': '20px',
                    'font-size-06': '24px',
                    'font-size-07': '35px',
                    'font-size-08': '44px',
                    'font-size-09': '54px',
                    'font-size-10': '86px',
                    'font-size-11': '104px',
                    'font-size-12': '136px'
                },
                tablet: {
                    'font-size-01': '13px',
                    'font-size-02': '14px',
                    'font-size-03': '16px',
                    'font-size-04': '18px',
                    'font-size-05': '20px',
                    'font-size-06': '24px',
                    'font-size-07': '35px',
                    'font-size-08': '44px',
                    'font-size-09': '54px',
                    'font-size-10': '86px',
                    'font-size-11': '104px',
                    'font-size-12': '136px'
                },
                desktop: {
                    'font-size-01': '13px',
                    'font-size-02': '14px',
                    'font-size-03': '16px',
                    'font-size-04': '18px',
                    'font-size-05': '20px',
                    'font-size-06': '24px',
                    'font-size-07': '35px',
                    'font-size-08': '44px',
                    'font-size-09': '54px',
                    'font-size-10': '86px',
                    'font-size-11': '104px',
                    'font-size-12': '136px'
                }
            },
            desktop: {
                phone: {
                    'font-size-01': '13px',
                    'font-size-02': '14px',
                    'font-size-03': '16px',
                    'font-size-04': '18px',
                    'font-size-05': '20px',
                    'font-size-06': '24px',
                    'font-size-07': '35px',
                    'font-size-08': '44px',
                    'font-size-09': '54px',
                    'font-size-10': '86px',
                    'font-size-11': '104px',
                    'font-size-12': '136px'
                },
                tablet: {
                    'font-size-01': '13px',
                    'font-size-02': '14px',
                    'font-size-03': '16px',
                    'font-size-04': '18px',
                    'font-size-05': '20px',
                    'font-size-06': '24px',
                    'font-size-07': '35px',
                    'font-size-08': '44px',
                    'font-size-09': '54px',
                    'font-size-10': '86px',
                    'font-size-11': '104px',
                    'font-size-12': '136px'
                },
                large: {
                    'font-size-01': '13px',
                    'font-size-02': '14px',
                    'font-size-03': '16px',
                    'font-size-04': '18px',
                    'font-size-05': '20px',
                    'font-size-06': '24px',
                    'font-size-07': '35px',
                    'font-size-08': '44px',
                    'font-size-09': '54px',
                    'font-size-10': '86px',
                    'font-size-11': '104px',
                    'font-size-12': '136px'
                }
            }
        },
        sizingText: 'Almost before we knew it, we had left the ground.'
    },
    mutations: {
        addFont(state, font) {
            state.fonts.push(font);
        },
        saveCurrentScale(state, currentScale) {
            state.currentScale = currentScale;
        }
    },
    actions: {},
    modules: {}
});
