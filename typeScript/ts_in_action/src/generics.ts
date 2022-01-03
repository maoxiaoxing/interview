
function log<T>(value: T): T {
  return value
}

// type Log = <T>(value: T) => T
// const myLog: Log = log

interface Log<T = string> {
  <T>(value: T): T;
}

const myLog: Log<number> = log


class Log1<T> {
  run(value: T) {
    return value
  }
}

const log1 = new Log1<number>()
log1.run(1)


// 类型约束

interface Length {
  length: number
}

function log2<T extends Length>(value:T) {
  console.log(value.length)
  return value
}

