import React, { Component } from 'react'
import HelloClass from './helloClass'

interface Loading {
  loading: boolean
}

function HelloHOC<P>(WrappedComponent: React.ComponentType<P>) {
  return class extends Component<P & Loading> {
    render () {
      const { loading, ...props } = this.props
      return loading ? <div>loding...</div> : <WrappedComponent {...props as P}></WrappedComponent>
    }
  }
}

export default HelloHOC(HelloClass)

