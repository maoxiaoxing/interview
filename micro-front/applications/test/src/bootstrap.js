import Vue from 'vue'
import App from './app.vue';
import { mount as m } from "marketing/MarketingApp"
import { mount as mo } from "common/Index"

console.log(mo, 'mo')

function mount(el) {
  const app = new Vue({
    render: (h) => h(App)
  })
  app.$mount(el)
}

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#app")
  if (el) mount(el)
}

export { mount }


