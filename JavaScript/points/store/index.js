let _fromCommit = false

const proxyData = function (_data) {
  return new Proxy(_data, {
    get(target, propKey, receiver) {
      return Reflect.get(target, propKey, receiver)
    },
    set(target, propKey, value, receiver) {
      if (!_fromCommit) {
        throw new Error('Store 中的数据必须通过 commit 函数修改')
      }
      _fromCommit = false
      return Reflect.set(target, propKey, value, receiver)
    }
  })
}

class Store {
  constructor(options) {
    this.state = proxyData(options.state)

  }
}

