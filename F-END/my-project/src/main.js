// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import './assets/mintReset.css'
// import '../static/iconfont.css'
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false
Vue.use((Vue) => {
  Vue.prototype.$axios = Axios
})
Vue.use(MintUi)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created () {
  }
})
