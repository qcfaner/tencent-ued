import Vue from 'vue'
import router from "./router.js";

// 引入 elementui 库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'small' });

import 'animate.css'
// Vue.use(animate)

import "@/assets/css/reset.css"
import "@/assets/css/theme.less"
import "@/assets/css/index.css"



import App from './App.vue'

import axios from "./utils/http.js"
Vue.prototype.$axios = axios;

Vue.config.productionTip = false
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
