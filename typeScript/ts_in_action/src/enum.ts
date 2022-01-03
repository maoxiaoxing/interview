
// 数字枚举
// 可以进行反向映射
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest,
}

// 字符串枚举
// 只有成员名称作为了 key ，不能反向映射
enum Message {
  Success = '成功',
  Fail = '失败'
}

// 异构枚举
enum Answer {
  N,
  Y = 'yes'
}

// 枚举成员
enum Char {
  // 常量枚举 const number
  // 常量枚举成员会在编译时计算出结果，然后以常量的形式出现在运行时环境
  a, // 没有初始值
  b = Char.a, // 已有枚举成员的引用
  c = 1 + 2, // 常量表达式
  // 计算枚举成员 computed number
  // 不会在编译阶段计算，而会保留到程序的执行阶段
  d = Math.random(),
  e = [1,2,3].length
}

// 常量枚举
// 会在编译阶段被移除
const enum Month {
  Jan,
  Feb,
  Mar,
}
// 编译时代码会变得简洁
const month = [Month.Jan, Month.Feb, Month.Mar]

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }

// 可以给枚举类型赋其他值，可以超出枚举类型的定义范围
const e: E = 3
const f: F = 3
// 两种不同类型的枚举不可以比较
// e === f

const e1: E.a = 1
const e2: E.b = 2
const e3: E.a = 0
// 相同类型的枚举可以比较
e1 === e3

// 字符串类型的枚举只能赋值枚举范围
const g1: G = G.a
const g2: G.a = G.a

