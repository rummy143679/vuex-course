import counterModule from './modules/counter/Counter';
import { createStore } from 'vuex';
import mutations from './modules/mutations';
import actions from './modules/actions';
import getters from './modules/getters';

const store = createStore({
  modules: {
    number: counterModule,
  },
  state() {
    return {
      count: 1,
      auth: false,
    };
  },
  mutations: mutations,
  actions: actions,
  getters: getters,
});
export default store;
