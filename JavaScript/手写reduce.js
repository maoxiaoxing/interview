const arr = [1, 2, 3]

Array.prototype.my_reduce = function(callBack, initValue) {

    if (typeof callBack !== 'function') {
        throw new Error(`${callBack} is not a function`)
    }

    const me = this // 获取当前数组
    
    const startIndex = initValue ? 0 : 1
    let result = initValue ? initValue : me[0]

    for (let i = startIndex; i < me.length; i++) {
        result = callBack(result, me[i], i , me)
    }

    return result
}

const res = arr.my_reduce((pre, item) => {
    return pre + item
})

console.log(res)
// console.log(1 + arr)