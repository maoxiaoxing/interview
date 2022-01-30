export type Direction = 'right' | 'left'

const direction: Direction = 'right'

function handleRequest (url: string, method: 'GET' | 'POST' | 'OPTION') {

}

// 对象所有属性变成只读属性
const req = {
  url: 'https://example.com',
  method: 'GET',
  obj: {a: 1},
} as const

handleRequest(req.url, req.method)
