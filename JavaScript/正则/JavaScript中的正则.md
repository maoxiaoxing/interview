# JavaScript中的正则

正则基本是高级前端的必会技能了，正则非常强大，但是很多前端对正则运用的都不是特别熟练，大部分原因就是觉得正则比较难，不愿意花时间去学习，其实正则语法并不难，只要多加练习，应付绝大部分的工作是没有问题的。

## 1 正则的基本使用

### 1.1 字面量创建正则

下面我们写一个最基本的正则
我们来测试下面的字符串中是否包含某个字符

```js
const str = `maoxiaoxing`
console.log(/a/.test(str)) // true
```

/a/ 就是一个最基本的正则表达式

我们在工作中的开发中，往往需要匹配的字段都被存储在一个变量中，那么这个变量这样传入正则表达式中呢

```js
const str = `maoxiaoxing`
const a = 'a'
console.log(eval(`/${a}/`).test(str)) // ture
```

我们可以通过 eval 和 模板字符串 将变量传入

### 1.2 对象创建正则

首个参数作为字符串传入
```js
const str = `maoxiaoxing`
const reg = new RegExp('a', 'g')
console.log(str.match(reg)) // ['a', 'a']
```

首个参数作为字面量传入
```js
const str = `maoxiaoxing`
const reg = new RegExp(/a/, 'g')
console.log(str.match(reg)) // ['a', 'a']
```

## 2 修饰符

修饰符也叫标记，修饰符可以指定正则表达式的额外匹配策略，修饰符不写在正则表达式里面，而是写在正则表达式之外的符号

### 2.1 g修饰符

默认情况下，JavaScript 中的正则表达式匹配到第一个匹配项就会停止后面的匹配了，而 g 修饰符可以达到全局匹配

```js
const str = `maoxiaoxing`
const reg = /a/g
console.log(str.match(reg)) // ['a', 'a']
```

### 2.2 i修饰符

在正则表达式中，是严格区分大小写的，但是我们有时候在做匹配的时候并不想区分大小写，i 修饰符可以做到不区分大小写

```js
const str = 'maoXiaoXing'
const reg = /X/gi
console.log(str.match(reg)) // ['X', 'X']
```

### 2.3 m修饰符

g 修饰符虽然可以做到全局匹配，但有时候也不是万能的，比如在遇到换行符的时候，就无法做到精准匹配，这时候 m 修饰符就起到了作用，m 修饰符可以使 ^ 和 $ 匹配一段文本中每行的开始和结束位置。

```js
const str = `
  maoxiaoxing is a handsome guy
  maoxiaoxing is attractive
`
console.log(str.match(/^\s*maoxiaoxing/g)) // ['\n    maoxiaoxing']
```

增加 m 修饰符之后

```js
const str = `
  maoxiaoxing is a handsome guy
  maoxiaoxing is attractive
`
console.log(str.match(/^\s*maoxiaoxing/gm)) // ['\n    maoxiaoxing', '    maoxiaoxing']
```

下面我们可以来看一个更加实用的例子

```js
const str = `
    #1 js,200元 #
    #2 html,100元 #
    #3 css,100元 # 666
    #4 node,300元 #
  `
```

这里我们有一些课程需要我们去格式化成数组对象的形式，方便前端去展示，我们可以这样做

```js
const reg = /^\s*#\d+\s+.+\s+#$/gm

const lessons = str.match(reg).map((s) => {
  s = s.replace(/\s*#\d+\s+/, '').replace(/\s*#\s*/, '')
  const [name, price] = s.split(',')
  return {
    name,
    price,
  }
})
```

lessons 就是下面这样的数据结构

```js
// lessons
[
  {
    "name": "js",
    "price": "200元"
  },
  {
    "name": "html",
    "price": "100元"
  },
  {
    "name": "node",
    "price": "300元"
  }
]
```

### 2.4 s修饰符

默认情况下的圆点 . 是 匹配除换行符 \n 之外的任何字符，加上 s 之后, . 中包含换行符 \n。

```js
const str = `
    maoxiaoxing is a handsome guy
    maoxiaoxing is attractive
    badboy
  `
  console.log(str.match(/badboy./)) // null
  console.log(str.match(/badboy./s)) // ['badboy\n']
```

## 3 正则实例属性

下面列举一些比较常用的实例属性

### 3.1 flags

flags 属性能够获取到正则表达式的修饰符

```js
const reg = /maoxiaoxing/g
console.log(reg.flags) // g
```

### 3.2 dotAll

dotAll 属性用作判断正则表达式是否使用了 s 修饰符

```js
const reg = /maoxiaoxing/
console.log(reg.dotAll) // false
```

```js
const reg = /maoxiaoxing/s
console.log(reg.dotAll) // true
```

### 3.3 global

global 属性用作判断正则表达式是否使用了 g 修饰符

```js
const reg = /maoxiaoxing/
console.log(reg.global) // false
```

```js
const reg = /maoxiaoxing/g
console.log(reg.global) // true
```
