import Vue from 'vue/dist/vue'

function renderVueComponent () {
  document.body.innerHTML = `
    <div id="app"></div>
  `
  new Vue({
    template: `
      <div id="app">
        <h1>{{ message }}</h1>
      </div>
    `,
    data: {
      message: 'hello vue'
    }
  }).$mount('#app')
}

test('vue test', () => {
  renderVueComponent()
  console.log(document.body.innerHTML)
  expect(document.body.innerHTML).toMatch(/hello vue/)
})
