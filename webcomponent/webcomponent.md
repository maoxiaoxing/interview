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
