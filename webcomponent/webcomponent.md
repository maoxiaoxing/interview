# Web Components

## 什么是 Web Components

如今前端开发生态中，我们不再使用原生 js 或者 jq 进行前端开发，而是使用诸如 Vue、React 这样的前端框架，是因为这些前端框架有比较好的生态、数据驱动视图、Dom Diff、模块化、组件化等。Web Components 就是为了组件化而诞生的，它是浏览器原生就支持的，而且 Web Components 组件化最重要的就是它是标准。这意味着你不需要使用 Vue、React 这样的框架就可以创建组件。
那么是否意味着我们以后不需要 Vue 和 React 了呢？其实不然，Web Components 组件完全可以和现在的 MVVM 框架是并存的关系，就像是 Sass 变量和原生的 CSS 变量能够并存使用一样。MVVM 框架不仅有组件化功能，还有页面路由、数据绑定、模块化、虚拟DOM等功能，而 Web Components 仅仅只是解决组件化的功能。
下面我们来看看各个前端框架中是怎样谈论 Web Components 的

> React
![](https://img2020.cnblogs.com/blog/1575596/202112/1575596-20211211221153474-2111335893.png)

> Vue
![](https://img2020.cnblogs.com/blog/1575596/202112/1575596-20211211221450907-1466848368.png)

看到这有的人可能会问为什么 Web Components 不会替代 Vue 和 React，我们还需要学习它呢？
很简单，Web Components 是浏览器的标准，任何前端框架想要有持久的生命力，都必须遵循标准，Vue 和 React 现在虽然非常流行，但是不能保证他们一直都是常青树，甚至有可能在未来的某一个时间段像 JQuery 退出了历史舞台。况且 Web Components 组件化和这些 MVVM 框架都是相同的，如果你学过 Vue 和 React ，那么学习 Web Components 简直不要太轻松。尤其是使用过 Vue 的同学，Vue 的很多语法和 Web Components 非常相似，例如 slot、template和生命周期等。其实尤雨溪在开发 Vue 的时候，很多思想都是借鉴的 Web Components。

## HTML Imports

Web Components 其实不是一门单一的技术，而是由四门技术组成，它们分别是 HTML Imports、HTML templates、Custom Elements 和 Shadow DOM。
HTML Imports 其实是一门已经被浏览器废弃的技术了，但是为什么还要将它呢？我们在学习一门新技术的时候，不光要学习这门技术的语法特性，还需要了解一下它发展的历史。
我们都知道 JavaScript 的模块化是 ES Module，Node 的模块化是 Common JS 规范，Css 有 Css Module、@import，但是从来没有听说过 HTML 有模块化，于是 Chrome 浏览器提出了一个 HTML Imports 的 HTML 的模块化概念，它的语法是下面这样的

```html
<link rel="import" href="myfile.html">
```

HTML Imports 这个语法看起来真的很酷炫，原先我们在 HTML 中只能引入 JavaScript 和 CSS，现在却能引入 html 文件了，这个功能确实很好用啊，为什么要废弃掉呢？
在我们以往对 Chrome 印象中，Chrome 浏览器一直是一个遵纪守法的良好公民，它的所有功能一直遵循 W3c 和 ECMA 的标准。其实则不然，Chrome 的很多特性其实是在倒逼标准的形成，Chrome 浏览器总是喜欢自己实现一些属性，为了不与标准冲突，它会在这些新特性前面加上自己的前缀 -webkit-，而且大部分特性确实很好用，于是其他浏览器也纷纷效仿，大家都在属性前面加上前缀，例如 -moz- 、-ms-、-o-，久而久之，很多属性虽然没有被纳入 W3c 的标准，却已经成为了事实上的标准，因为很多项目已经使用这样的技术运行很久了。
Web Components 其实不是最近几年才火的，早在 2011 年就已经诞生了。那时前端还没有组件化的概念，于是不安分的 Chrome 就自己实现了 Web Components 也是第一个版本 v0，这极大地引起了其他浏览器厂商的不满，平时实现几个 Css 属性就算了，Web Components 这么重要的新功能不可能让 Chrome 说了算，而 Chrome 从考虑到浏览器兼容性的问题也意识到了独木难支，于是和其他浏览器厂商一起开会，会议上大家产生的激烈的分歧，很多浏览器厂商觉得马上快出 ECMAScript 6 了，想先看看 ES 6 的模块化功能，觉得 HTML Imports 很鸡肋，于是根据各个浏览器厂商的不满，又修改了 v1 版本，也就是我们现在能看到的版本。
2015 年是一个前端革命性的一年，这一年 ECMAScript 2015 诞生了，而且就在这一年前后，三大前端框架（Angular、React、Vue）相继火遍全世界，这几个前端框架都有组件化的概念，于是很多浏览器厂商就没有开发 Web Components 的动力了，但是几年后又觉得浏览器需要这样一个组件化的规范，而且也迫于开发者的压力，于是在 2017 年 Safari 实现了 Web Components ，但是没有实现 is 属性，火狐也在 Firefox 2018 中实现了 Web Components，Edge 和 opera 早就使用 Chrome 内核了，而 IE 这个老古董，你懂得！就让他淹没在历史长河吧！
至此，几大主流浏览器基本都实现了 Web Components，但是很遗憾 HTML Imports 却被遗弃了，但是我们可以来看看下一代 HTML Modules 技术

```html
<!-- component.html -->
<template>
  component
</template>
<script type="module"></script>
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <script type="module">
    import component from './component.html'
  </script>
</body>
</html>
```

目前这种语法还没有任何浏览器支持，因为它还有很大的争议，在 js 中引入 html 有点怪，至于为什么要这样引入，这里做个伏笔，后面讲到 template 的时候就知道为什么了

## customElements

### customElements.define

customElements 是 window 上面的属性，而 customElements 上面最常用的属性就是 define 属性，是用来定义自定义元素。define 的第一个参数是注册的组件名称，第二个参数接收一个继承的类，用来定义组件，这个类中的 this 的指向就是当前这个组件。

```html
<mxx-tag></mxx-tag>
  
<script>
  customElements.define('mxx-tag', class extends HTMLElement {
    constructor () {
      super()
      this.innerHTML = 'mxx-tag'
    }
  })
</script>
```

这样一个最简单的组件就诞生了，但是需要注意的有以下几点

- define 的第一个参数，必须以 - 作为分隔符，否则就会报错，这时因为需要和原生的标签区分开。
- 不能注册同名组件
- 标签只能写成 \<mxx-tag>按钮<\/mxx-tag> 这种完整的标签，而不能写成 <mxx-tag \/> 这种自闭和标签

### customElements.get

customElements.get 能够获取组件中的构造函数

```html
<mxx-tag></mxx-tag>
  
<script>
  customElements.define('mxx-tag', class extends HTMLElement {
    constructor () {
      super()
      this.innerHTML = 'mxx-tag'
    }
  })

  console.log(customElements.get('mxx-tag'))
</script>
```

![](https://img2020.cnblogs.com/blog/1575596/202112/1575596-20211212163233487-1067528368.png)

有了这个特性，我们就能使用这个特性对组件已经写好的组件进行扩展，例如我们来扩展 [fancy-components](https://github.com/fancy-components) 中的按钮

```html
<my-bubbles click>my-bubbles</my-bubbles>
  
<script type="module">
  import { FcBubbles } from 'https://unpkg.zhimg.com/fancy-components'

  new FcBubbles()

  customElements.define(
    'my-bubbles',
    class extends customElements.get('fc-bubbles') {
      constructor () {
        super()
        this.onclick = function () {
          console.log('my-bubbles')
        }
      }
    })
</script>
```

![](https://gitee.com/maoxiaoxing/mxx-blog/raw/master/Img/bubbles.gif)

### customElements.whenDefined

通常我们在写代码的时候，都会将 script 标签放在页面的底部，这时为了在渲染的时候，先解析 html ，防止 js 的加载阻塞 dom 的渲染。那么就有一个问题，当我们在渲染的 dom 的时候，遇到这些自定义的标签，其实浏览器是将这些标签标志位为定义的标签，知道遇到 customElements.define 的时候，才会知道这是我们自定义的标签。
定义了的标签是可以通过 css 的选择器 :defined 获取的，那么获取未定义的标签就是 :not(:deined)，那么在组件未加载的过程中，我们就可以做一个加载动画

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body{
      display: grid;
      place-items: center;
    }
    @keyframes loading {
      to { background-position: 300% 0; }
    }
    :not(:defined) {
      width: 300px;
      height: 60px;
      background: blue linear-gradient(60deg, transparent, transparent 20%, white 40%, transparent 60%) 0 / 300%;
      border-radius: 10px;
      animation: loading 2s infinite;
    }
  </style>
</head>
<body>
  <div>普通标签</div>
  <mxx-tag></mxx-tag>
  
  <script>
    setTimeout(() => {
      customElements.define('mxx-tag', class extends HTMLElement {
        constructor () {
          super()
          this.innerHTML = 'mxx-tag'
        }
      })
    }, 3000)

  </script>
</body>
</html>
```

![](https://gitee.com/maoxiaoxing/mxx-blog/raw/master/Img/definedloading.gif)

:not(:defined) 仅仅只能解决 css 遇到的问题，而 customElements.whenDefined 就能解决一些组件未定义的时候遇到的 js 问题
customElements.whenDefined 接收一个标签名称的参数，它返回一个 Promise 对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    body,html {
      height: 100%;
    }
    body{
      display: grid;
      place-items: center;
    }
    @keyframes loading {
      to { background-position: 300% 0; }
    }
    :not(:defined) {
      width: 300px;
      height: 60px;
      background: blue linear-gradient(60deg, transparent, transparent 20%, white 40%, transparent 60%) 0 / 300%;
      border-radius: 10px;
      animation: loading 2s infinite;
    }
    mxx-tag {
      display: grid;
      place-items: center;
      font-size: 30px;
      font-weight: 800;
    }
  </style>
</head>
<body>
  <mxx-tag>加载中...</mxx-tag>
  
  <script>
    setTimeout(() => {
      customElements.define('mxx-tag', class extends HTMLElement {
        constructor () {
          super()
          this.innerHTML = 'mxx-tag'
        }
      })
    }, 3000)

    customElements.whenDefined('mxx-tag')
      .then(() => {
        document.querySelector('mxx-tag').innerHTML = 'mxx-tag'
      })
  </script>
</body>
</html>
```

![](https://gitee.com/maoxiaoxing/mxx-blog/raw/master/Img/definedloading1.gif)

### customElements.upgrade

upgrade 是升级的意思，它的作用不太好解释，我们直接看一个例子就明白了
上面我们都是在 html 中创建自定义标签，这回我们尝试在 js 中创建标签

```js
const el = document.createElement('mxx-tag')

class MxxTag extends HTMLElement {}
customElements.define('mxx-tag', MxxTag)
console.log(el instanceof MxxTag) // false
```

上面的 console 返回了 false ，很好理解，因为还没有定义 mxx-tag 标签的时候，我们就创建了 el 属性
解决这个问题很简单，只要把创建 el 的代码写在定义标签之后就可以了，其实还有一种解决方法，就是使用 customElements.upgrade 升级一下 el 即可

```js
const el = document.createElement('mxx-tag')

class MxxTag extends HTMLElement {}
customElements.define('mxx-tag', MxxTag)
console.log(el instanceof MxxTag) // false
customElements.upgrade(el)
console.log(el instanceof MxxTag) // true
```

## 生命周期

### connectedCallback 和 disconnectedCallback

在组件化开发的过程中，有一个无论如何都绕不开的问题，就是生命周期，我们都知道 Vue、React 都有自己的生命周期体系，虽然两者都使用了 hooks 的概念，但是殊途同归。而 Web Components 也有自己的生命周期，下面我们来看看都有什么生命周期

```js
customElements.define('fancy-components', class extends HTMLElement {
  constructor () {
    super()
    // 相当于 Vue 的 setup
    console.log('先运行构造函数')
  }
  connectedCallback () {
    // 相当于 Vue 的 mounted
    console.log('再运行连接回调')
  }
  disconnectedCallback () {
    // 相当于 Vue 的 unmounted
    console.log('当删除组件时才会运行失联回调')
  }
  adoptedCallback () {
    // 当使用 document.adoptNode 后会触发该生命周期
    console.log('当使用 document.adoptNode 后会运行收养回调')
  }
})
```

connectedCallback 是组件加载完的生命周期，disconnectedCallback 是组件删除后的生命周期
### adoptedCallback

connectedCallback 和 disconnectedCallback 这两个生命周期应该比较好理解，只有 adoptedCallback 不太好理解，adopted 是领养的意思，下面我们来看下面的例子

```html
<!-- ifram.html -->
<mxx-tag></mxx-tag>
  
<script>
  customElements.define('mxx-tag', class extends HTMLElement {
    constructor () {
      super()
      this.innerHTML = `<div>来自 iframe</div>`
    }
  })
</script>
```

```html
<!-- component.html -->
<iframe src="./iframe.html"></iframe>
```

上面这段代码的执行结果如下图这样

![](https://img2020.cnblogs.com/blog/1575596/202112/1575596-20211212202750932-2021380788.png)

现在我们想将 iframe 中的内容剪切出来

```html
<mxx-tag></mxx-tag>
  
<script>
  customElements.define('mxx-tag', class extends HTMLElement {
    constructor () {
      super()
      this.innerHTML = `<div>来自 iframe</div>`
    }

    adoptedCallback () {
      console.log('被收养了')
    }
  })
</script>
```

```html
<iframe src="./iframe.html"></iframe>

<script>
  const iframe = document.querySelector('iframe')
  iframe.onload = function () {
    const mxxTag = iframe.contentDocument.querySelector('mxx-tag')
    document.body.append(document.adoptNode(mxxTag))
  }
</script>
```

![](https://img2020.cnblogs.com/blog/1575596/202112/1575596-20211212202947838-1695496593.png)

这样 iframe 中的内容就被剪切出来了，仔细想想这个太强大了，如果我们把百度的搜索引擎收养出来，那我们岂不是可以直接做一个搜索引擎了吗，但是现实却是残酷的，这个收养功能只能嵌入同域下的内容，跨域的内容会直接报错。其实很好理解，现实我们想收养孩子，也只能从福利院收养（规范只能收养同域下的节点），否则就是拐卖人口（跨域）了。

### attributeChangedCallback

