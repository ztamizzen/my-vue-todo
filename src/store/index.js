import Vue from "vue";
import Vuex from "vuex";
import { mutations } from "./mutations";
import { getters } from "./getters";
import { actions } from "./actions";

Vue.use(Vuex);
const state = {
  todos: [
    {
      id: 1,
      text: "Finish web app",
      done: false
    },
    {
      id: 2,
      text: "Make sure there are tests for everything",
      done: false
    }
  ]
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
