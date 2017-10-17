import Vue from 'vue'
import {
  Vuetify,
  VApp,
  VToolbar,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn
} from 'vuetify'

import App from './App'
import router from './router'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VToolbar,
    VFooter,
    VList,
    VBtn
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
