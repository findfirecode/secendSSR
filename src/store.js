import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const mockData = [
    {
      img:require("./assets/img/li1.jpg"),
      title:'鸡爪 零食 精品零食 特价',
      sale:"包邮|第二件9.9"
    },
    {
      img:require("./assets/img/li1.jpg"),
      title:'虾条 韩国',
      sale:"包邮|第二件9.9"
    },
    {
      img:require("./assets/img/li1.jpg"),
      title:'山药薄片 零食',
      sale:"包邮|第二件9.9"
    },
    {
      img:require("./assets/img/li1.jpg"),
      title:'香浓糕点 奶香 烘焙',
      sale:"包邮|第二件9.9"
    },
    {
      img:require("./assets/img/li1.jpg"),
      title:'零食大礼包',
      sale:"包邮|第二件9.9"
    },
    {
      img:require("./assets/img/li1.jpg"),
      title:'沙琪玛',
      sale:"包邮|第二件9.9"
    },
  ]
export function createStore() {
  return new Vuex.Store({
    state: {
      listinfo: [],
    },
    actions: {
      fetchList ({commit}) {
        // return axios({
        //   method:"get",
        //   url:'/productlist'
        // }).then(res => {
        //   commit('refreshList', res.data.listinfo);
        // })
        return new Promise((resolve, reject) => {
          commit('refreshList', mockData);
            resolve()
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
