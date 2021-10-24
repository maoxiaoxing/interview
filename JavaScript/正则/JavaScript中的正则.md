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


