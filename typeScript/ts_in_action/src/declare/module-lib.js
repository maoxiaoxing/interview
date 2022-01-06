
const version = '1.0'
function doSomething() {
  console.log('doSomething')
}

function moduleLib(options) {
  console.log(options)
}

moduleLib.version = version
moduleLib.doSomething = doSomething

moduleLib.exports = moduleLib
