import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import vui from '../../dist/iview-page.umd.js'
import '../../dist/iview-page.css'

Vue.use(ViewUI)
Vue.use(vui)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
