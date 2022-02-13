import Vue from 'vue'
import App from './app.vue';
// import Message from './components/message.vue'

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

export { 
  mount,
  // Message,
}


