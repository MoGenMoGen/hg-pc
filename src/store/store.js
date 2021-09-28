import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
const axios = require('axios');
const store = new Vuex.Store({
  state: {
    bWidth:1920,
    width:1200,
  },
  mutations:{
    changeWidth:(state,data)=>{
      state.bWidth = data.bWidth
      state.width = data.width
    },
  },
  actions:{
    
  }
});

export default {
  store
}
