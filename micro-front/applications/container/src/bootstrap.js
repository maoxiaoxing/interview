import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { mount as m, Message } from 'common/Index'
console.log(Message, 'm')

function mount(el) {
  ReactDOM.render(<App />, el)
}

if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#root")
  if (el) mount(el)
}

export { mount }
