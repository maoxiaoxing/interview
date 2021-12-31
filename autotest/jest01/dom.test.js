
function renderHtml () {
  const div = document.createElement('div')
  div.innerHTML = `
    <h1>hello world</h1>
  `
  document.body.appendChild(div)
}

test('dom test', () => {
  renderHtml()
  expect(document.querySelector('h1').innerHTML).toBe('hello world')
})
