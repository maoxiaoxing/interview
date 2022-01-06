interface List {
  readonly id: number;
  name: string;
  // [x: string]: any;
  age?: number
}

interface Result {
  data: List[]
}

function render (result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
  })
}

// 鸭子模型
const result = {
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B', },
  ]
}

render(result)
// render({
//   data: [
//     { id: 1, name: 'A', sex: 'male' },
//     { id: 2, name: 'B', },
//   ]
// } as Result)

// render(<Result>{
//   data: [
//     { id: 1, name: 'A', sex: 'male' },
//     { id: 2, name: 'B', },
//   ]
// })


// 数字索引接口
interface StringArray {
  [index: number]: string
}
const strArr: StringArray = ['jack', 'ben']


// 字符串索引接口
interface Names {
  [x: string]: string;
  // y: number;
}
const names: Names = {
  jack: 'jack',
  ben: 'ben',
}

// 索引型接口
// 第二个必须是第一个的子类型
interface Animals {
  [x: string]: any;
  [z: number]: number;
}

