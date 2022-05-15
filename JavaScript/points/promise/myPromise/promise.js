const REJECTED = 'rejected'
const FUFILLED = 'fufilled'
const PENDING = 'pending'

class MyPromise {
  constructor (executor) {
    try {
      executor(this.resolve, this.reject)
    } catch (err) {
      this.reject(err)
    }
  }

  status = PENDING
  value = undefined
  reason = undefined
  
  resolve () {

  }

  reject () {

  }
}
