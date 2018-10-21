import Vue from "vue";
import Vuex from "vuex";
import { mutations, STORAGE_KEY } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";
import plugins from "./plugins";

Vue.use(Vuex);
const state = {
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || [],
  count: 0
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins
});
