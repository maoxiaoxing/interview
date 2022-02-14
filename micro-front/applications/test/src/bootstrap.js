import Vue from 'vue'
import App from './app.vue';
import { mount as m } from "marketing/MarketingApp"
// import { mount as mo } from "part/PartApp"
// import Header from 'app1/Header'

// console.log(Header, 'Header')
// console.log(mo, 'mo')
console.log(m, 'm')

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


