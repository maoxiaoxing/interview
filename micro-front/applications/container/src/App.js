import React, { lazy, Suspense, useState, useEffect } from 'react'
// import MarketingApp from "./components/MarketingApp"
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom"
import { createBrowserHistory } from 'history'
import Header from "./components/Header"
import Progress from "./components/Progress"

const MarketingApp = lazy(() => import("./components/MarketingApp"))
// const AuthApp = lazy(() => import("./components/AuthApp"))
// const DashboardApp = lazy(() => import("./components/DashboardApp"))

const history = createBrowserHistory()

function App () {
  const [status, setStatus] = useState(false)
  useEffect(() => {
    console.log(status)
    if (status) {
      history.push("/dashboard")
    }
  }, [status])
  return (
    <BrowserRouter history={history}>
      <Header status={status} setStatus={setStatus} />
      <Suspense fallback={<Progress />}>
        <Routes>
          <Route path="/" element={<MarketingApp />}></Route>
          {/* <Route path="/auth/signin" element={<AuthApp setStatus={setStatus} />}></Route> */}
          {/* <Route path="/dashboard" element={(!status && <Redirect to="/" />) (<DashboardApp />)}></Route> */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
