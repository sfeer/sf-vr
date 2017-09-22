import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(ElementUI)
Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
