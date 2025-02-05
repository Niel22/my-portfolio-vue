import { createStore } from 'vuex';
import aboutMe from './module/aboutMe';
import portfolio from './module/portfolio';

const store = createStore({
    modules: {
        aboutMe,
        portfolio
    }
})

export default store;