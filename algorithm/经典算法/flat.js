const arr = [1,2, [3,4,[5],6],7]

function flat(arr) {
    return arr.reduce((res, item) => {
        if (Array.isArray(item)) {
            return [...res, ...flat(item)]
        } else {
            return [...res, item]
        }
    },[])
}

console.log(flat(arr))