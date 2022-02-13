import React, { useEffect, useRef } from "react"
import { mount } from "marketing/MarketingApp"
// import { useHistory } from "react-router-dom"

export default function MarketingApp() {
  const ref = useRef()
  // const history = useHistory()
  useEffect(() => {
    mount(ref.current)
  }, [])
  return <div ref={ref}></div>
}
