import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

const counterModule = {
  namespaced: true,
  state() {
    return {
      count: 1,
    };
  },
  mutations: mutations,
  getters: getters,
  actions: actions,
};

export default counterModule;
