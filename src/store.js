import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'


Vue.use(Vuex);

export function createStore() {
  return new Vuex.Store({
    state: {
      listinfo: [],
    },
    actions: {
      fetchList ({commit}) {
        return axios({
          method:"get",
          url:'/productlist'
        }).then(res => {
          commit('refreshList', res.data.listinfo);
        })
      }
    },
    mutations: {
      refreshList(state, list) {
        state.listinfo = list
      }
    },
  });
}
