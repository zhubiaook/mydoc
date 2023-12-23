/*
 * Vuex
 */

import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      count: 0,
    };
  },
  getters: {
    double: (state) => {
      return state.count * 2;
    },
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {
    asyncAdd({ commit }) {
      setTimeout(() => {
        commit("increment");
        commit("increment");
      }, 1000);
    },
  },
});

export { store };
