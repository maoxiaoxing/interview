
import axios from "axios"

function forEach(items, cb) {
  for (let index = 0; index < items.length; index++) {
    cb(items[index], index)
  }
}

test('mock func', () => {
  const testArr = [1,2,3]
  const mockFn = jest.fn((value, index) => {
    return value + index
  })

  // mock 所有函数返回值
  // mockFn.mockReturnValue(123)

  // mock 一次返回值
  mockFn.mockReturnValueOnce(123)
  forEach(testArr, mockFn)
  console.log(mockFn.mock)
  expect(mockFn.mock.calls.length).toBe(testArr.length)
})

function getUsers () {
  return axios.get('/users')
}
