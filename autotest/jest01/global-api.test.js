// test('global-api test', () => {
//   console.log('global api')
// })

// test.only('global-api test', () => {
//   console.log('test only')
// })

// test.only('global-api test', () => {
//   console.log('test only1')
// })


test('global-api test', () => {
  expect(2+2).toBe(4)
  expect({name: 'jack'}).toEqual({name: 'jack'})
  expect('barfoo').toMatch(/foo/)
  expect(6).toBeGreaterThan(2)
  expect(6).toBeLessThan(8)
})
