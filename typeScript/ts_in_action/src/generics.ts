
function log<T>(value: T): T {
  return value
}

// type Log = <T>(value: T) => T
// const myLog: Log = log

interface Log<T = string> {
  <T>(value: T): T;
}

const myLog: Log<number> = log

