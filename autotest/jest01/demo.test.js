const { add, substract } = require('./demo')

test('sum', () => {
  expect(add(1, 2)).toBe(3)
})
