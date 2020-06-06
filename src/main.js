import Vue from 'vue'
import router from "./router.js";

// 引入 elementui 库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, {size: 'small'});

import "@/assets/css/reset.css"
import "@/assets/css/theme.less"

Vue.config.productionTip = false

import App from './App.vue'

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
