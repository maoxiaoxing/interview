const data = {
  foo: 'bar'
}

let user = null

// 执行每个测试用例之前执行
beforeEach(() => {
  console.log('beforeEach')
  user = Object.assign({}, data)
})

// 每个测试用例执行结束之后运行
afterEach(() => {
  console.log('afterEach')
})

// 在所有测试用例之前先执行
beforeAll(() => {
  console.log('beforeAll')
})

// 在所有测试用例结束之后运行
afterAll(() => {
  console.log('afterAll')
})

test('test1', () => {
  console.log('test1')
  user.foo = 'baz'
  expect(user.foo).toBe('baz')
})

test('test2', () => {
  console.log('test2')
  expect(user.foo).toBe('bar')
})


