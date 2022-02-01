export type GreetFn = (s: string) => void

function greeter (fn: GreetFn) {
  fn('hello TypeScript')
}

function mxxConsole (s: string) {
  console.log(s)
}

greeter(mxxConsole)
