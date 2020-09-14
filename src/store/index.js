import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Show: true,
  },
  mutations: {
    setShow(state, status) {
      state.Show = status;
    },
  },
  actions: {},
  modules: {},
});
