function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === 'object') {
      for (const item of strs) {
        console.log(item)
      }
    } else if (typeof strs === 'string') {
      console.log(strs)
    }
  } else {
      
  }
}
