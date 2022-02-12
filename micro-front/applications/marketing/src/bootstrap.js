import React from 'react'
import ReactDOM from 'react-dom'

function mount (el) {
  ReactDOM.render(<div>Marketing</div>, el)
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#app-marketing')
  if (el) mount(el)
}

export {
  mount,
}
