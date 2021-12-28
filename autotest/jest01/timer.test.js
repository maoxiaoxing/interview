
const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // cb({foo: 'bar'})
      resolve({foo: 'bar'})
      getData()
    }, 2000)
  })
}

jest.useFakeTimers()

test('timer mock', () => {
  expect.assertions(1)
  getData()
    .then((data) => {
      expect(data).toEqual({foo: 'bar'})
    })

  // 快进定时器
  // jest.runAllTimers()

  // 快进当前进行的定时器结束
  // jest.runOnlyPendingTimers()

  jest.advanceTimersByTime(1000)
  jest.advanceTimersByTime(1000)
})
