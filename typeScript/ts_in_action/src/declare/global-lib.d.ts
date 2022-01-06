declare function globalLib(options: globalLib.Options): void

declare namespace globalLib {
  const version: string;
  function doSometiong(): void;
  interface Options {
    [key: string]: any
  }
}
