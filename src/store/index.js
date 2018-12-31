import Vue from 'vue';
import Vuex from 'vuex';
import * as API from '../api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    fetchCities: async () => {
      const { data } = await API.fetchCities();

      console.log(data);
    }
  },
  getters: {}
});
