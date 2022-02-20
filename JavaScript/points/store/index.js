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
    const store = this
    this.state = proxyData(options.state)
    this.mutations = options.mutations
    this.getters = options.getters
    this.commit = function boundCommit(type, payload) {
      return store.commit(store, type, payload)
    }
  }

  commit (_type, _payload) {
    _fromCommit = true
    if (this.mutations.hasOwnProperty(type)) {
      const entry = this.mutations[type]
      entry.call(this, this.state, _payload)
    }
  }
}

