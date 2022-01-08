import React, { useState } from 'react'
import HelloClass from './helloClass'
import HelloHOC from './helloHOC'
import { Button } from 'antd'

interface Greeting {
  name: string;
  firstName: string;
}

const Hello = (props: Greeting) => {
  const [loading, setLoading] = useState<boolean>(true)

  const toggleLoading = () => {
    setLoading(!loading)
  }

  return (
    <div>
      <HelloClass name="typescript"></HelloClass>
      <p>--------- HelloHOC --------</p>
      <Button onClick={toggleLoading}>切换</Button>
      <HelloHOC name="typescript" loading={loading}></HelloHOC>
    </div>
  )
}

Hello.defaultProps = {
  firstName: ''
}

export default Hello
