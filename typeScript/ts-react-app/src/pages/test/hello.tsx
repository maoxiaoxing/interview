import React from 'react'
import HelloClass from './helloClass'

interface Greeting {
  name: string;
  firstName: string;
}

const Hello = (props: Greeting) => {

  return (
    <div>
      <HelloClass name="typescript"></HelloClass>
    </div>
  )
}

Hello.defaultProps = {
  firstName: ''
}

export default Hello
