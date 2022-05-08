onconnect = function(e) {
  var port = e.ports[0]
  port.addEventListener('message', function(e) {
    var workerResult = 'Result: ' + e.data
    port.postMessage(workerResult)
  })

  port.start()
}
