
class Schedule {
  constructor(maxCount) {
    this.maxCount = maxCount
    this.workingCount = 0
    this.workingQueue = []
  }

  add (promise) {
    this.workingQueue.push(promise)
  }

  start() {
    for(let i = 0; i < this.maxCount; i++) {
      this.next()
    }
  }

  next() {
    if (this.workingQueue.length && this.workingCount < this.maxCount) {
      this.workingCount++
      const promise = this.workingQueue.shift()
      promise().then(() => {
        this.workingCount--
        this.next()
      })
    }
  }
}
