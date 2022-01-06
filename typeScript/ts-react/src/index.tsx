
// const hello: string = 'Hello TypeScript'

// const app: any = document.querySelector('#app')
// app.innerHTML = hello

import React from "react"
import ReactDOM from "react-dom"
import Hello from "./components/demo/Hello"

ReactDOM.render(
  <Hello name="TypeScript"></Hello>,
  document.querySelectorAll('#app')[0],
)
