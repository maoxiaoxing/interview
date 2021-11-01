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

## 2 修饰符和实例属性

修饰符也叫标记，修饰符可以指定正则表达式的额外匹配策略，修饰符不写在正则表达式里面，而是写在正则表达式之外的符号，每个修饰符都有对应的实例属性去检测，下面我们来看看

### 2.1 g修饰符和 global 属性

默认情况下，JavaScript 中的正则表达式匹配到第一个匹配项就会停止后面的匹配了，而 g 修饰符可以达到全局匹配

```js
const str = `maoxiaoxing`
const reg = /a/g
console.log(str.match(reg)) // ['a', 'a']
```

global 属性用作判断正则表达式是否使用了 g 修饰符

```js
const reg = /maoxiaoxing/
console.log(reg.global) // false
```

```js
const reg = /maoxiaoxing/g
console.log(reg.global) // true
```

### 2.2 i修饰符和 ignoreCase 属性

在正则表达式中，是严格区分大小写的，但是我们有时候在做匹配的时候并不想区分大小写，i 修饰符可以做到不区分大小写

```js
const str = 'maoXiaoXing'
const reg = /X/gi
console.log(str.match(reg)) // ['X', 'X']
```

ignoreCase 属性用作判断是否使用了 i 修饰符

```js
const reg = /maoxiaoxing/
console.log(reg.ignoreCase) // false
```

```js
const reg = /maoxiaoxing/i
console.log(reg.ignoreCase) // true
```

### 2.3 m修饰符和 multiline 属性

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

multiline 属性用作判断是否使用了 m 修饰符

```js
const reg = /maoxiaoxing/
console.log(reg.multiline) // false
```

```js
const reg = /maoxiaoxing/m
console.log(reg.multiline) // true
```

### 2.4 s修饰符和 dotAll 属性

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

dotAll 属性用作判断正则表达式是否使用了 s 修饰符

```js
const reg = /maoxiaoxing/
console.log(reg.dotAll) // false
```

```js
const reg = /maoxiaoxing/s
console.log(reg.dotAll) // true
```

### 2.5 u修饰符和 unicode 属性

u 标志开启了多种 Unicode 相关的特性
在我们的开发中，可能会有涉及匹配汉字的需求

```js
const str = 'maoxiaoxing9527.学正则'
console.log(str.match(/\p{sc=Han}/gu)) // ['学', '正', '则']
```

unicode 属性判断是否使用了 u 标志

```js
const regex = /\u{61}/
console.log(regex.unicode) // true
```

```js
const regex = /\u{61}/u
console.log(regex.unicode) // true
```

### 2.6 y修饰符和 sticky 属性

了解过正则的朋友会知道正则表达式会有一个 lastIndex 属性来记录匹配的位置
如果正则表达式开启了 g 模式，lastIndex 会一直递增，直到匹配到选项或无匹配选项
而开启了 y 模式，如果没有匹配到，那么 lastIndex 就会归零

```js
const str = `amaoxiaoxing`
const reg = /a/g

console.log(reg.exec(str)) // ['a']
console.log(reg.lastIndex) // 1
console.log(reg.exec(str)) // ['a']
console.log(reg.lastIndex) // 3
```

下面我们来看看使用了 y 模式

```js
const str = `amaoxiaoxing`
const reg = /a/g

console.log(reg.exec(str)) // ['a']
console.log(reg.lastIndex) // 1
console.log(reg.exec(str)) // null
console.log(reg.lastIndex) // 0
```

sticky 属性判断是否使用了 y 标志

```js
const reg = /maoxiaoxing/
console.log(reg.sticky) // false
```

```js
const reg = /maoxiaoxing/y
console.log(reg.sticky) // true
```

### 2.7 flags 属性

flags 属性能够获取到正则表达式的修饰符

```js
const reg = /maoxiaoxing/g
console.log(reg.flags) // g
```

## 3 字符类

正则中有很多特殊字符，下面我们来看看怎样使用

### 3.1 . 元字符

. 字符在正则匹配除了换行符的任意字符

```js
const str = 'maoxiaoxing9527*&^%'
console.log(str.match(/.+/)) // ['maoxiaoxing9527*&^%']
```

\n 在正则中表示换行符

```js
const str = 'maoxiaoxing9527\n*&^%'
console.log(str.match(/.+/)) // ['maoxiaoxing9527']
```

如果我们需要匹配字符串 . 那么就需要使用 \ 对它进行转义

```js
const str11 = 'maoxiaoxing9527.*&^%'
console.log(str11.match(/\./)) // ['.']
```

### 3.2 w 与 W 元字符

\w 匹配字母 数字 _

```js
const str = 'maoxiaoxing9527_&123'
console.log(str.match(/\w+/)) // maoxiaoxing9527_
```

可以利用 \w 匹配做一个简单的邮箱验证

```js
const email = 'maoxiaoxing@163.com'
const reg = /^\w+@\w+.\w+/
console.log(reg.test(email)) // true
```

\W 匹配非字母 数字 _

```js
console.log('maoxiaoxing@163.com'.match(/\W/g)) // ['@', '.']
```

### 3.3 \d 和 \D 元字符

\d 匹配数字

```js
const str = 'maoxiaoxing 9527'
const reg = /\d+/g
console.log(str.match(reg)) // ['9527']
```

\D 匹配非数字

```js
const str = `张三：010-66666666，李四：020-88888888`
const reg = /[\D]/g
console.log(str.match(reg)) // ['张', '三', '：', '-', '，', '李', '四', '：', '-']
```

### 3.4 \s 和 \S 元字符

\s 匹配空白字符 \n 也算空格

```js
const reg5 = /\s/
console.log(reg5.test('\n88')) // true
```

\S 匹配非空格  只有只为空白的时候才为假

```js
const reg6 = /\S/
console.log(reg6.test(' ')) // false
```

## 4 字符边界

### 4.1 \b

在讲 \b 之前我们先来看看一个例子，我们需要匹配字符串中的 cat 单词

```js
const str = `The cat scattered his food all over the room`
console.log(str.match(/cat/g)) // ['cat', 'cat']
```

明明只有一个 cat 单词，却匹配到了两个，这个正则将 scattered 单词中的 cat 也匹配到了，这显然是不符合我们的预期的。
这个时候 \b 就能发挥

## 5 量词
## 6 原子组和原子表

## 7 断言







<!-- ## 3 正则方法

### 3.1 test

test 是正则中比较常用的一个方法，它返回一个 bool 值，用来判断正则是否与指定的字符串匹配上

```js

``` -->

