import { version } from './../interface/interface-merge';

declare namespace umdLib {
  const version: string
  function doSometiong(): void
}

export as namespace umdLib

export = umdLib
