import React, { useEffect, useRef } from "react"
import { mount } from "marketing/MarketingApp"
import { useNavigate } from "react-router-dom"
import { createBrowserHistory } from 'history'

export default function MarketingApp() {
  const ref = useRef()
  const history = createBrowserHistory()
  useEffect(() => {
    console.log(history, 'kk')
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavgate({ pathname: nextPathname }) {
        const pathname = history.location.pathname
        if (nextPathname !== pathname) {
          history.push(nextPathname)
        }
      }
    })
    if (onParentNavigate) history.listen(onParentNavigate)
  }, [])
  return <div ref={ref}></div>
}
