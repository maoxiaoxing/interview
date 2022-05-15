const REJECTED = 'rejected' // 失败标志
const FUFILLED = 'fufilled' // 成功标志
const PENDING = 'pending' // 异步中

class MyPromise {
  constructor (executor) {
    try {
      // 立即执行 同步任务
      executor(this.resolve, this.reject)
    } catch (err) {
      this.reject(err)
    }
  }

  status = PENDING // 初始 pending 状态
  value = undefined // 成功的值
  reason = undefined // 失败的值
  
  resolve (value) {
    if (this.status !== PENDING) return
    this.value = value
  }

  reject (resson) {
    if (this.status !== PENDING) return
    this.reason = this.reason
  }
}
