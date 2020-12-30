const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function resolvePromise(promise, res, resolve, reject) {
  if (promise === res) { // 如果 then 中执行结果等于当前 promise ，就抛出错误，防止死循环
    reject(new TypeError('TypeError: Chaining cycle detected for promise #<Promise>'))
  }

  // 判断 res 的值是普通值还是 promise 对象
  // 如果是普通值 直接调用resolve
  // 如果是 promise 对象 查看 promise 对象返回的结果
  // 在根据 promise 对象返回的结果 决定调用 resolve 还是调用 reject
  if(res instanceof MyPromise) {
    res.then(resolve, reject)
  } else {
    resolve(res)
  }
}
class MyPromise {
  constructor(executor) {
    try{
      // new Promise 立即执行 同步任务
      executor(this.resolve, this.reject)
    } catch(err) {
      this.reject(err)
    }
  }

  status = PENDING // promise 的状态
  value = undefined // 成功的值
  error = undefined // 失败后的值

  onFulfilledQueue = [] // 成功的回调
  onRejecedQueue = [] // 失败后的回调

  resolve = (value) => {
    if (this.status !== PENDING) return

    this.status = FULFILLED // 更改状态为 fulfilled
    this.value = value // 将成功之后的值保存起来
    while(this.onFulfilledQueue.length) { // 如果存在回调就执行
      this.onFulfilledQueue.shift()()
    }
  }

  reject = (err) => {
    if (this.status !== PENDING) return

    this.status = REJECTED // 更改状态为 rejected
    this.error = err // 将失败的原因保存起来
    while(this.onRejecedQueue.length) { // 如果失败回调存在就直接执行
      this.onRejecedQueue.shift()()
    }
  }

  then(onFulfilled, onRejeced) {
    onFulfilled = onFulfilled || (value => value) // 处理 onFulfilled 的空值
    onRejeced = onRejeced || (error => {throw error}) // 处理 onRejeced 的空值

    const promiseThen = new MyPromise((resolve, reject) => { // 创建新的 promise 对象
      if (this.status === FULFILLED) { // 如果当前状态是成功
        setTimeout(() => {
          try {
            const res = onFulfilled(this.value)
            resolvePromise(promiseThen, res, resolve, reject)
          } catch(err) {
            reject(err)
          }
        })
      } else if(this.status === REJECTED) { // 如果当前状态是失败
        setTimeout(() => {
          try {
            const err = onRejeced(this.error)
            resolvePromise(promiseThen, err, resolve, reject)
          } catch(err) {
            reject(err)
          }
        })
      } else {
        // 如果当前状态是 pending，证明 then 中有异步代码，如果直接返回，不会输出结果，所以要放入回调方法中
        this.onFulfilledQueue.push(() => {
          setTimeout(() => {
            try {
              const res = onFulfilled(this.value)
              resolvePromise(promiseThen, res, resolve, reject)
            } catch(err) {
              reject(err)
            }
          })
        })
      }
    })
    return promiseThen
  }

  catch(onRejeced) {
    return this.then(undefined, onRejeced)
  }

  static resolve(value) {
    if (value instanceof MyPromise) return value

    return new MyPromise((resolve) => resolve(value))
  }

  static reject(reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason)
    })
  }


}