
// const getData = (cb) => {
//   setTimeout(() => {
//     cb({foo: 'bar'})
//   }, 2000)
// }

// test('async test', (done) => {
//   getData((data) => {
//     done()
//     expect(data).toEqual({foo: 'bar'})
//   })
// })

const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // cb({foo: 'bar'})
      resolve({foo: 'bar'})
    }, 2000)
  })
}

// test('async test', (done) => {
//   getData().then((data) => {
//     done()
//     expect(data).toEqual({foo: 'bar'})
//   })
// })

// test('async test', () => {
//   return getData().then((data) => {
//     expect(data).toEqual({foo: 'bar'})
//   })
// })

// test('async test', () => {
//   return expect(getData()).resolves.toEqual({foo: 'bar'})
// })

// test('async test', async () => {
//   try {
//     const data = await getData()
//     expect(data).toEqual({foo: 'bar'})
//   } catch (err) {
//     expect(err).toMatch('mxx')
//   }
// })
