import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createMemoryHistory, createBrowserHistory } from "history"

function mount (el, { onNavgate, defaultHistory, initialPath }) {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath]
    })
  if (onNavgate) history.listen(onNavgate)
  ReactDOM.render(<App history={history} />, el)
  return {
    onParentNavigate({ pathname: nextPathname }) {
      const pathname = history.location.pathname
      if (nextPathname !== pathname) {
        history.push(nextPathname)
      }
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  const el = document.querySelector('#app-marketing')
  if (el) mount(el)
}

export {
  mount,
}
