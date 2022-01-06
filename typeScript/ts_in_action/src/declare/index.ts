
globalLib({x: 1})

// const myModule = {}
import moment from 'moment'

declare module 'moment' {
  export function myFunction(): void
}
moment.myFunction = function () {}

declare global {
  namespace globalLib {
    function doAnything(): void
  }
}
globalLib.doAnything = () => {}
