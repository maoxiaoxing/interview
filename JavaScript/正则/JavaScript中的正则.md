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
const reg = /^maoxiaoxing/
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

+? 是 + 的懒惰型，+ 正常匹配一个或多个，那么禁止贪婪就会倾向于匹配少的字符

```js
console.log('mxxnmxxn'.match(/m.+?/g)) // ['mx', 'mx']
```

可以看到上面只匹配了一个 x 就停止了单次匹配，可能看到这块，细心的人会发出一个疑问，按理说禁止贪婪会尽可能匹配少的字符，像上面的例子，+ 匹配一个或多个，+? 就只会匹配一个。但是为什么上一节的 * 是匹配零个或多个，*? 却不是匹配零个字符呢？我们带着疑问看看下面的例子

```js
console.log('mxxnmxxn'.match(/m.+?n/g)) // ['mxxn', 'mxxn']
```

## 6 原子表和原子组（组和范围）

### 6.1 原子表

| 用例 | 说明 |
| --- | --- |
| [] | 匹配 [] 中的任意一个字符 |
| [0-9] | 匹配 0-9 之间的任意一个数字 |
| [a-z] | 匹配小写 a-z 之间的任意一个字母 |
| [A-Z] | 匹配大写 A-Z 之间的任意一个字母 |
| [^] | 匹配除了 [] 中的字符之外的字符 |

#### 6.1.1 [] 匹配任意一个字符

在一组表达式中表示某个元字符，就叫做原子表，可以用 [] 来表示
原子表中的字符集你可以理解为一个范围集合
[] 用来匹配 [] 中任意一个字符，例如 [mx] 匹配 m 或者 x ，而不是以 mx 为一个整体来匹配的

```js
const reg = /[mx]/g
const str = 'maoxiaoxing'
console.log(str.match(reg)) // ['m', 'x', 'x']
const str1 = 'mao'
const str2 = 'xiaoxing'
console.log(str1.match(reg)) // ['m']
console.log(str2.match(reg)) // ['x', 'x']
```

日期往往有不同的连接符，我们可以使用 [] 的特性匹配多个连接符的日期

```js
const date = `
  2022-11-09
  2022/11/09
  2022.11.09
`
const dateReg = /\d{4}[-/\.]\d{2}[-/\.]\d{2}/g
console.log(date.match(dateReg)) // ['2022-11-09', '2022/11/09', '2022.11.09']
```

#### 6.1.2 匹配数字

想匹配任意一个数字，比较好的理解表达方式是 `[0123456789]`，还有一种表达方式是 `[0-9]`，注意这里的 0-9 是一个整体

```js
const reg = /[0123456789]/
// 等价于
const reg1 = /[0-9]/
```

字符集 [0-9] 显然是比 [0123456789] 更简略直观的一种表达

#### 6.1.2 匹配字母

- 匹配小写字母

匹配小写字母使用 `[a-z]`

```js
const reg = /[abcdefghijklmnopqrstuvwxyz]/
// 等价于
const reg1 = /[a-z]/
```

我们尝试匹配 a-h 之间的字母，匹配 a-h 之间的字符能匹配到，匹配 a-h 之外的字符，就会返回 null

```js
const code1 = 'g'
const code2 = 'i'
const reg = /[a-h]/
console.log(code1.match(reg)) // ['g']
console.log(code2.match(reg)) // null
```

- 匹配大写字母

同小写字母，匹配大写字母使用 `[A-Z]`

```js
const reg = /[ABCDEFGHIJKLMNUPQRSTUVWXYZ]/
// 等价于
const reg1 = /[A-Z]/
```

- 字母和数字需要正序

在原子表中，如果使用字母或者数字表示范围，那么需要正序，否则会报语法错误

```js
const num = '1'
console.log(num1.match(/[3-0]/)) // SyntaxError

const code = 'i'
console.log(code.match(/[h-a]/)) // SyntaxError
```

#### 6.1.3 排除选项

符号 ^ 在正则中是具有二义性的，在原子表中 [^...] 代表排除一个或一组选项

```js
const str = 'abc is not a word'
console.log(str.match(/[^abc]/g)) // [' ', 'i', 's', ' ', 'n', 'o', 't', ' ', ' ', 'w', 'o', 'r', 'd']
```

注意，表达式 [^abc] 并不是非 abc 而是非 a 且非 b 且非 c，所以不是这三个字符的都将匹配，当然这也包含空格

我们再来看一个实用的例子，我们想要在一组电话号码中匹配汉字

```js
const str = `张三:101-66666666,李四:010-88888888`
console.log(str.match(/[^\d:\-,]/g)) // ['张', '三', '李', '四']
```

这虽然匹配到了所有的汉字，但是我们的目的如果想要匹配人的名字，显然这没有达到我们的预期
我们可以使用上面 2.5 小结的 Unicode 属性匹配

```js
console.log(str.match(/\p{sc=Han}+/gu)) // ['张三', '李四']
```

正则的功能非常强大，我们一定要活学活用，在不同的场景选用不同的技术

### 6.2 |

`|` 表示 `或`，例如：`a|b` 表示匹配 a 或者 b 中的任意一个字符

```js
const reg = /m|x/g
const str = 'maoxiaoxing'
console.log(str.match(reg)) // ['m', 'x', 'x']
```

```js
const reg = /red|green/
const str = 'red pen'
const str1 = 'red pen'
console.log(reg.test(str)) // true
console.log(reg.test(str1)) // true
```

### 6.3 原子组

原子组也叫捕获组，原子组能够匹配多个字符
使用 `()` 会将多个字符归为一组，比如 (foo)，那么原子组有什么用呢？
我们尝试去匹配一个url

```js
const url = '欢迎来到https://www.baidu.com网站'
const reg1 = /(https?):\/\/(\w+\.\w+\.(com|cn))/
console.log(url.match(reg1)) // ['https://www.baidu.com', 'https', 'www.baidu.com', 'com', index: 4, input: '欢迎来到https://www.baidu.com网站', groups: undefined]
```

我们使用 `match` 方法去匹配正则的时候，会返回一个数组，这个数组会包含如下内容

| 属性 | 描述 |
|-- | -- |
| 0 | 匹配的内容 |
| 1~n | 匹配到的原子组的内容 |
| index | 第一个匹配到的字符的索引 |
| input | 原字符串 |
| groups | 具名捕获组 |


#### 6.3.1 修改优先级

原子组可以修改匹配的优先级
我们来看一个比较常见的例子，需要匹配字符串中的年份，很多人可能会写出下面的代码

```js
const str = '1998-10-10'
const reg = /19|20\d{2}/
console.log(str.match(reg)) // ['19']
```

我们想匹配以 19 或 20 开头的四位数字，可是结果只匹配到了 19，以为 `|` 操作符把位于它左右两个部分作为一个整体看待的，也就是说 `19|20\d{2}` 被解析成了 `19` 或 `20\d{2}`。

```js
const str = '1998-10-10'
const reg = /(19|20)\d{2}/
console.log(str.match(reg)) // ['1998']
```

原子组可以把 19|20 归为一个子表达式，那么 19或20 就作为一个匹配组，后面的 \d{2} 作为另一个匹配组，从而匹配到正确的结果

### 6.3.2 引用分组 \n

引用分组 \n 可以匹配对应的第 n 个原子组中的引用
如果我们想匹配字符串 dom 中的 h 标签，一部分人可能会写出下面的代码

```js
const dom = `
  <h1>标题</h1>
  <span>其他内容</span>
  <h2>正文</h2>
`
const reg = /<h[1-6]>[\s\S]*<\/h[1-6]>/g
console.log(dom.match(reg)) // ['<h1>标题</h1>\n    <span>其他内容</span>\n    <h2>正文</h2>']
```

为什么会出现这种情况呢，因为 `h[1-6]` 会匹配到 `h1`，然而 `h[1-6]` 同样也会匹配到 `h2`，所以就会出现错误的匹配结果，如果想要得到正确的结果，我们期望第一个 `h[1-6]` 能够匹配 `h1`，那第二个 `h[1-6]` 也是匹配 `h1`；第一个 `h[1-6]` 匹配 `h2`，那第二个 `h[1-6]` 也匹配 `h2`。
使用 引用分组就能解决这个问题

```js
const dom = `
  <h1>标题</h1>
  <span>其他内容</span>
  <h2>正文</h2>
`
const reg = /<(h[1-6])>[\s\S]*<\/\1>/g
console.log(dom.match(reg)) // ['<h1>标题</h1>', '<h2>正文</h2>']
```

当 `(h[1-6])` 匹配到了 `h1`，\1 匹配到了 `h1`；当 `(h[1-6])` 匹配到了 `h2`，\1 就匹配到了 `h2`

### 6.3.3 非捕获组 (?:x)

`(?:x)` 表示匹配但是不记录匹配的内容

举个例子，如果我们想匹配 url 中的 host

```js
const reg = /(https:\/\/)(www.baidu.com)/
console.log(url.match(reg)) // ['https://www.baidu.com', 'https://', 'www.baidu.com', index: 4, input: '欢迎来到https://www.baidu.com网站', groups: undefined]
```

可以看到匹配到的结果数组，第二个索引才是我们想要的结果，这时可以使用非捕获组过滤掉 `https://`

```js
const reg = /(?:https:\/\/)(www.baidu.com)/
console.log(url.match(reg)) // ['https://www.baidu.com', 'www.baidu.com', index: 4, input: '欢迎来到https://www.baidu.com网站', groups: undefined]
```

可以看到 `https://` 虽然匹配了，但是没有被记录下来，我们只需要取第一个索引就是我们想要的结果了

### 6.3.4 具名捕获组 (?<Name>x)

可以将 x 匹配的内容存储在结果数组的 groups 属性中，`<>` 中的内容是捕获组的名称
我们可以用这个特性获取正则匹配中的某几个字段

```js
const date = '2022-11-22'
const reg6 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
const res = date.match(reg6)
const { groups } = res
console.log(groups.year) // 2022
console.log(groups.month) // 11
console.log(groups.day) // 22
```


## 7 断言

断言是给正则的匹配加限制规则，你可以理解为条件判断

### 7.1 先行断言 x(?=y)

`x(?=y)` 是先行断言，也叫向前查找，只有 x 后面跟着 y 时，x 才会被匹配

可以利用先行断言
```html
<div class="box">
  毛小星在学习正则，毛小星爱写博客
</div>
<script>
  const reg = /毛小星(?=爱写博客)/g
  const main = document.querySelector('.box')
  main.innerHTML = main.innerHTML.replace(reg, (p1) => `<a href="https://www.cnblogs.com/">${p1}</a>`)
</script>
```

也可以利用先行断言来匹配 url 中的协议

```js
const url = 'https://www.baidu.com'
const reg1 = /[a-z]+(?=:\/\/)/
console.log(url.match(reg1)) // ['https', index: 0, input: 'https://www.baidu.com', groups: undefined]
```

### 先行否定断言 x(?!y)

`x(?!y)` 是先行否定断言，会匹配后面不是 y 的 x

如果我们想匹配数字中的小数位

```js
const num = `3.1415`
const reg = /\d+(?!\.)/
console.log(num.match(reg))
```

### 后行断言 (?<=y)x

`(?<=y)x` 是后行断言，也叫向后查找，匹配前面为 y 的内容，也就是 x 前面为 y 时，x 才会被匹配

举个例子，我们想从一段数据中提取出水果的价格来

```js
const str = `
  apple: $2.1
  apple23: $3.1
  banana: $3.6
  orange: $8.9
  orange33: $6.9
`
const reg = /\$[0-9\.]+/g
console.log(str.match(reg)) // ['$2.1', '$3.1', '$3.6', '$8.9', '$6.9']
```

上面的结果是符合预期的，但是如果我们不想结果中有 $ 符号出现，那么该怎么办呢？

```js
const str = `
  apple: $2.1
  apple23: $3.1
  banana: $3.6
  orange: $8.9
  orange33: $6.9
`
const reg = /[0-9\.]+/g
console.log(str.match(reg)) // ['2.1', '23', '3.1', '3.6', '8.9', '33', '6.9']
```

上面的结果虽然能匹配到所有的价格，但是也将水果的型号也匹配进去了，这显然不是我们想要的结果，我们只是不想要 $ 符号出现在结果里面，使用后行断言就可以解决这个问题

```js
const str = `
  apple: $2.1
  apple23: $3.1
  banana: $3.6
  orange: $8.9
  orange33: $6.9
`
const reg = /(?<=\$)[0-9\.]+/g
console.log(str.match(reg)) // ['2.1', '3.1', '3.6', '8.9', '6.9']
```

`(?<=\$)` 只是匹配了 $ ,但是不记录它，所以最终匹配的结果就只有价格

### 后行否定断言 (?<!y)x

`(?<!y)x` 是后行否定断言，匹配前端不是 y 的 x

如果我们想匹配买的水果的数量，可以使用后行否定断言匹配不包含 $ 的数字
```js
const str = `I spent $20 on 5 apples, $30 on 2 grapefruit, and 20 oranges`

const reg = /(?<!\$)\b\d+/g
console.log(str.match(reg)) // ['5', '2', '20']
```

这里使用 `\b` 的原因是因为我们需要把数量作为一个整体，否则会出现匹配单个数字的情况

```js
const str = `I spent $20 on 5 apples, $30 on 2 grapefruit, and 20 oranges`

const reg = /(?<!\$)\d+/g
console.log(str.match(reg)) // ['0', '5', '0', '2', '20']
```

## 8 正则基本原理

### 8.1 正则引擎的基本介绍

#### 8.1.1 正则表达式的分类

正则表达式的引擎大致可以分为两类：一种是 DFA（确定性有穷自动机），一种是 NFA（非确定性有穷自动机）。[精通正则表达式](https://book.douban.com/subject/2154713/) 的作者很形象的将这两者比喻为电动机（DFA）和汽油机（NFA），我本人更愿意称 DFA 为自动挡，NFA 为手动挡。如你所知，自动挡的车会更好开一些，以 DFA 为引擎的正则表达式会更好控制一些，它的运行大致如你所想；而手动挡的车对驾驶技术肯定有更高的要求，以 NFA 为引擎的正则表达式，往往需要程序员比较了解它内部的原理，才能写出一些正确且高效的正则表达式。几乎所有喜欢车的爱好者都会喜欢开手动挡的车，因为更加有驾驶乐趣，而以 NFA 为引擎的正则表达式也是这样，前提就是你必须足够了解它。
DFA 和 NFA 都有比较长的历史，NFA 的历史会更长一些。使用 NFA 的语言大致有 .NET、PHP、Ruby、Perl、Python、Java、grep（大多数版本）；使用 DFA 的语言大致有 awk（大多数版本）、flex、lex、MySQL。DFA 和 NFA 在各种语言中经过各种变化已经有了很多的差异，为了规范这种现象，POSIX标准应运而生，它最重要的作用就是规定了**使用者期望由表达式获得的准确结果**。DFA 显然是符合标准的，但是 NFA 的结果却不一定，所以 NFA 需要进行修改才能符合规范。这样正则表达式大致可以分为三类：

- DFA
- 传统型 NFA
- POSIX NFA

#### 8.1.2 JavaSript 使用的正则引擎是什么？

在[精通正则表达式](https://book.douban.com/subject/2154713/)中给出了一种测试方法：
> 看看忽略优先量词是否得到支持？如果是，基本就能确定这是传统型 NFA

```js
const reg = /nfa|nfa*not/g
const str = 'nfa*not'

console.log(str.match(reg)) // ['nfa']
```

可以看到确实只匹配到了 nfa，而且通过上面章节，我们知道 JavaScript 是支持或略优先量词，所以可以确定的说，**JavaScript的正则表达式使用的引擎是 NFA**

### 8.2 表达式主导和文本主导

如果我们想要在段落中匹配 ning 字符，我们来看看在 NFA 和 DFA 引擎的区别

```js
const reg = /ni(ne|ght|ng)/g
const str = '...ning...'
```

- NFA 是表达式主导的

表达式主导在匹配当前文本的时候，每次只是检查正则表达式的一部分。
在 NFA 主导的正则引擎中，我们想要在段落中匹配 ning，在 reg 中的意思实际上是 nine 或者 night 或者 ning。第一个元素是 n，它会反复遍历这个段落，直到找到 n 字符，然后是 i 字符，这时会记录 ni。紧接着是 ne 分支，它会接着匹配字符 n，记录 nin，匹配到 e 字符的时候，就会失败，删除 nin，进入下一个分支，直到第三个分支全部匹配。表达式的在不同元素之间进行转化，这就是表达式主导。

- DFA 是文本主导的

文本主导在匹配当前文本的时候，会同时进行正则表达式分支的匹配
在 DFA 主导的正则引擎中，会记录当前所有的有效可能匹配，进入分支之前会保留字符 ni，当进入分支匹配时，分支 ght 就直接被 pass 掉了，这时会保留分支 ne 和分支 ng，然后将 nin 保留起来，分支走完，匹配 ning。如果所有的分支都没有匹配到，就会将 nin 删除，接着 ni 之后的继续匹配，这种每个字符都能主导引擎的方式就叫做文本主导。

### 8.3 回溯

通过上面讲解，我们能看出 DFA 的匹配结果是非常确定，而且由于它会同时匹配不同分支，所以它最多会对目标字符串进行一次遍历，但是 NFA 就不一样了，它会多目标字符串进行反复的遍历，NFA 在遇到多个可能成功的选择时，会选择其中一个进行深入探索，然后记住另一个，如果上一个可能匹配失败了，则会回过头来匹配另一个，这就是回溯。
回溯有两个要点：

- 如果需要在"进行尝试"和"跳过尝试"之间选择，对于匹配优先量词，引擎会优先选择"进行尝试"，而对于忽略优先量词，会选择"跳过尝试"
- 距离当前最近存储的选项就是当本地失败强制回溯时返回的，使用的原则 LIFO（栈）

#### 8.3.1 未进行回溯的匹配

来看一个例子，使用表达式 /ba?r/ 匹配 bar，匹配当前状态如下：

| bˇar | bˇa?r |
| -- | -- |

当前会记录状态 b，下一步是匹配 a?，符号 ? 是优先匹配的，所以引擎首先会尝试匹配符号 a，由于 ? 是可选的，所以现在引擎会记录两个状态，b 和 ba

| baˇr | ba?ˇr |
| -- | -- |

最终字符 r 也能匹配，整个匹配完成，释放备用状态。

#### 8.3.2 进行回溯的匹配

如果匹配的文本是 br，匹配字符 b 的过程都是相同的，下面就会尝试匹配 a

| brˇ | ba?ˇr |
| -- | -- |

显然 a? 无法匹配 c，但是局部的失败不会影响整体，于是就会进行一次回溯

| bˇr | ba?ˇr |
| -- | -- |

回归之前的状态，然后匹配字符 r

| brˇ | ba?rˇ |
| -- | -- |

这时可以匹配字符 c，整个匹配完成

#### 8.3.3 不成功的匹配

我们使用 /ba?r/ 去匹配 baz，同上面一样匹配 a 的时候会保留一个状态

| baˇz | ba?ˇr |
| -- | -- |

接着向后走，字符表达式 r 无法匹配字符 z，于是就会回溯到之前的状态，由表达式 r 去匹配字符 a，这次匹配也显然失败了。如果还有其他状态，还会进行回溯，但是此时没有其他状态了，从字符 b 开始的匹配就宣告失败了。
但是整条语句的匹配并没有结束，引擎还会尝试再一次从字符 b 进行匹配，这可以被想象成一次"伪回溯"

| ˇbaz | ˇba?r |
| -- | -- |

过程和上面一样，所有分支都失败了，接下来从字符 a 和字符 z 开始的匹配都宣告失败，于是整个匹配失败

| bˇaz | ˇba?r |
| -- | -- |

| baˇz | ˇba?r |
| -- | -- |

#### 8.3.4 忽略优先的匹配

我们使用 /ba??r/ 匹配 bar，首先会匹配字符 b，

| bˇar | bˇa??r |
| -- | -- |

然后匹配字符 a，因为 ?? 是忽略优先的，所以会先忽略掉匹配字符 a，但是为了防止后面匹配失败，所以需要记录如下状态

| bˇar | bˇar |
| -- | -- |

然后会尝试用表达式 r 匹配字符 a

| baˇr | ba??ˇr |
| -- | -- |

显然表达式 r 是无法匹配字符 a 的，所以引擎会退回到之前的状态

| bˇar | bˇar |
| -- | -- |

这样匹配就会成功，接着匹配字符 r

<!-- ## 3 正则方法

### 3.1 test

test 是正则中比较常用的一个方法，它返回一个 bool 值，用来判断正则是否与指定的字符串匹配上

```js

``` -->

## 参考

- [正则表达式必知必会](https://book.douban.com/subject/2269648/)
- [精通正则表达式](https://book.douban.com/subject/2154713/)

