
declare function moduleLib(options: Options): void

interface Options {
  [key: string]: any
}

declare namespace moduleLib {
  const version: string
  function doSometiong(): void
}

export = moduleLib
