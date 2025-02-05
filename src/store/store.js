import { createStore } from 'vuex';
import aboutMe from './module/aboutMe';

const store = createStore({
    modules: {
        aboutMe
    }
})

export default store;