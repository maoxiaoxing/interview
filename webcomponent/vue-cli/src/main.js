import Vue from 'vue'
import App from './App.vue'
import { FcBubbles } from 'fancy-components'

new FcBubbles()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
