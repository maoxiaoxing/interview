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

