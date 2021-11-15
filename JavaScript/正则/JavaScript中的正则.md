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

匹配字母和汉字

```js
const str = 'maoxiaoxing9527.要继续努力，加油！'
console.log(str.match(/\p{L}/gu)) // ['m', 'a', 'o', 'x', 'i', 'a', 'o', 'x', 'i', 'n', 'g', '要', '继', '续', '努', '力', '加', '油']
```

匹配标点符号

```js
const str = 'maoxiaoxing9527.要继续努力，加油！'
console.log(str.match(/\p{P}/gu)) // ['.', '，', '！']
```

匹配所有的单个汉字

```js
const str = 'maoxiaoxing9527.要继续努力，加油！'
console.log(str.match(/\p{sc=Han}/gu)) // ['要', '继', '续', '努', '力', '加', '油']
```

匹配汉字

```js
const str = 'maoxiaoxing9527.要继续努力，加油！'
console.log(str.match(/[\u4e00-\u9fa5]+/g)) // ['要继续努力', '加油']
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

### 4.1 \b 和 \B

在讲 \b 之前我们先来看看一个例子，我们需要匹配字符串中的 cap 单词

```js
const str = `The captain wore his cap and cape proudly as he sat listening to the recap of how his crew saved the men from a capsized vessel.`
console.log(str.match(/cap/g)) // ['cap', 'cap', 'cap', 'cap', 'cap']
```

明明只有一个 cap 单词，却匹配到了一堆 cap，这时因为很多单词中都包含 cap 单词，而我们却没有给正则对相关单词的限制，这显然是不符合我们的预期的。
这个时候 \b 就能发挥它的作用了，\b 匹配一个单词的边界，更准确地说 \b 匹配这样一个位置，这个位置用来构成单词的字符（字母、数字和下划线，也就是和 \w 相匹配的字符）和一个不能用来构成单词的字符（也就是与 \W 相匹配的字符）之间。

我们先来看看单个 \b 的使用效果

```js
const str = `The captain wore his cap and cape proudly as he sat listening to the recap of how his crew saved the men from a capsized vessel.`
console.log(str1.match(/\bcap/g)) // ['cap', 'cap', 'cap', 'cap']
```

我们能看到，使用 \bcap 是匹配以 cap 开头的单词

以此类推，使用 cap\b 肯定就是匹配以 cap 结尾的单词

```js
const str = `The captain wore his cap and cape proudly as he sat listening to the recap of how his crew saved the men from a capsized vessel.`
console.log(str1.match(/cap\b/g)) // ['cap', 'cap']
```

回到我们刚开始的问题，我们想匹配单个 cap 单词的话，应该使用的就是 \bcap\b 了

```js
const str = `The captain wore his cap and cape proudly as he sat listening to the recap of how his crew saved the men from a capsized vessel.`
console.log(str1.match(/\bcap\b/g)) // ['cap']
```

\B 匹配非单词边界，可能稍微不太好理解，下面我来看一个例子

```js
const str = `maoxiaoxing is a handsome-guy and smart - guy`
console.log(str.match(/\B-\B/g)) // ['-']
```

\B 表示不匹配一个单词的边界，也就是上一个字符和下一个字符属于同一类型的位置：要么两者都必须是单词，要么两者都必须是非单词，例如在两个字母之间或两个空格之间

```js
const str = `maoxiaoxing is a handsome-guy and smart - guy`
console.log(str.match(/\Ban\B/g)) // ['an']
```

### 4.2 ^ 和 $

^ 匹配一个字符串的开头

```js
const str = `maoxiaoxing is a handsome-guy`
const reg = /^maoxiaoxing/g
console.log(reg.test(str)) // true
```

$ 匹配一个字符串的结尾

```js
const str = `maoxiaoxing is a handsome-guy`
const reg = /guy$/g
console.log(reg.test(str)) // true
```

在实际开发中，可以使用 ^ 和 $ 来验证名称的有效性，比如名称只能以小写英文开头，以字母下划线结尾

```js
const reg2 = /^[a-z]\w+$/
console.log(reg2.test('maoxiaoxing9527')) // true
console.log(reg2.test('毛小星')) // false
console.log(reg2.test('9527maoxiaoxing')) // false
```

## 5 量词

### 5.1 x+

\+ 号用来匹配字符的一个或多个

下面我们看一个例子，cat eat fishhhhhhh 这个句子有单词拼写错误，我们想替换成正确的fish

```js
const str = 'cat eat fishhhhhhh'
console.log(str.replace(/\w+h+/, 'fish')) // cat eat fish
```

### 5.2 x*

\* 号用来匹配字符的零个或多个

开发中我们有时需要匹配一些代码中的注释

```js
const code = `
  // 注释
  const a = 1
  // this is comment
  console.log(2)
`
const reg = /\/\/.*/g
console.log(code.match(reg)) // ['// 注释', '// this is comment']
```

### 5.3 x?

? 在正则中有很多用途，x? 是其中一种，匹配字符的零个或一个

开发中我们往往需要匹配 url，有的 url 是以 http 开头的，有的是以 https 开头的，这时 ? 就可以发挥它的作用了

```js
const urls = `
  https://www.baidu.com
  http://www.forta.com
`
const urlReg = /https?:\/\/[\w.]+/g
console.log(urls.match(urlReg)) // ['https://www.baidu.com', 'http://www.forta.com']
```

### 5.4 匹配次数的精确值

上面小节提到的 + 、* 、? 虽然解决了很多问题，但是却无法为匹配的字符提供一个精确的范围。

#### 5.4.1 x{n}

x{n} 匹配字符的 n 个
我们来看下面的例子，匹配字符串中的所有日期

```js
const str = `
  2009-10-12
  2013-11-18
  2020-12-12
  02-11-22
`
const reg = /\d{4}-\d{2}-\d{2}/g
console.log(str.match(reg)) // ['2009-10-12', '2013-11-18', '2020-12-12']
```

#### 5.4.2 x{n,}

x{n,} 表示至少匹配字符的 n 个
例如 [a-z]{3,} 就表示至少匹配 3 个字母，少于 3 个字母就不会发生匹配

```js
const reg3 = /[a-z]{3,}/
console.log('c'.match(reg3)) // null
console.log('cat'.match(reg3)) // ['cat']
console.log('catherine'.match(reg3)) // ['catherine']
```

#### 5.4.3 x{n,m}

x{n,m} 表示匹配 x 字符的 n 到 m 个
可以看一下面的例子，我们需要在一堆钱币中找到大于 100 的

```js
const coins = `
  $100.00
  $200.689
  $98.00
  $26.953
  $1021.666
  $33.678
`
const reg = /\$\d{3,}\.\d{2,3}/g
console.log(coins.match(reg)) // ['$100.00', '$200.689', '$1021.666']
```

如果 x{n,m} 中的 m 和 n 相等的话，和 x{n} 的结果是一样的

```js
console.log('cat'.match(/[a-z]{2,2}/)) // ['ca']
```

如果 x{n,m} 中的 m 小于 n 的话， 就会报语法错误

```js
console.log('cat'.match(/[a-z]{3,2}/)) // Uncaught SyntaxError: Invalid regular expression: /[a-z]{3,2}/: numbers out of order in {} quantifier
```

### 5.5 禁止贪婪

上面列举的量词都是贪婪的，它们都会匹配朝多的方向匹配，例如 a{1,6} 这个正则就会尽可能向 6 个 a 匹配，这种匹配机制是非常有用的，但是有时候也会存在过度匹配的情况，我们看看下面这个例子

```js
const text = `跟着<span>毛小星</span>一起学<span>正则</span>`
const reg = /<span>.*<\/span>/g
console.log(text.match(reg)) // ['<span>毛小星</span>一起学<span>正则</span>']
```

我们想要匹配一段内容中的所有 span 标签及其中的内容，虽然也匹配到了，但是匹配的结果却是两个 span “融合”了，这显然不符合我们想要的结果，我们想要分开的结果。

#### 5.5.1 *?

其实解决上面的问题是很简单的，正常的 * 字符的是贪婪匹配，那么它就会将所有符合内容，那么只要使用 \*? 就可以解决问题，\*? 是 * 的懒惰型，也就是它在匹配到第一个结果后，就会停止匹配，如果有 g 标识符的话，那就会进行下一轮的匹配。

```js
const text = `跟着<span>毛小星</span>一起学<span>正则</span>`
const reg = /<span>.*?<\/span>/g
console.log(text.match(reg)) // ['<span>毛小星</span>', '<span>正则</span>']
```

这样的结果就显然符合我们的预期了

#### 5.5.2 +?

+? 是 + 的懒惰型，

## 6 原子组和原子表

## 7 断言







<!-- ## 3 正则方法

### 3.1 test

test 是正则中比较常用的一个方法，它返回一个 bool 值，用来判断正则是否与指定的字符串匹配上

```js

``` -->

## 参考

- [正则表达式必知必会](https://book.douban.com/subject/2269648/)

