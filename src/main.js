import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import store from './store/store';
import {
  Apps,
  until,
  reg
} from '../public/js/until.js';
import '../public/css/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false;

Vue.prototype.until = new until();
Vue.prototype.App = new Apps();
Vue.prototype.until = new until();
Vue.prototype.reg = new reg();
new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
