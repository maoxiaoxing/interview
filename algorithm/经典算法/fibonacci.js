// 1
const fibonacci = function(n) {
  if(n==0)return 0
   else if(n==1)return 1
   else return Fibonacci(n-1) + Fibonacci(n-2)
}

const fibonacci1 = function(n) {
  var last = 1
  var last2 = 0
  var current = last2
  for(var i = 1; i <= n; i++){
    last2 = last
    last = current
    current = last + last2
  }
  return current
}

const res = fibonacci1(0)
console.log(res)