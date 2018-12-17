![](https://upload-images.jianshu.io/upload_images/2979799-082a124643e0c57d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

之前一直用 React.js 来写一个电影选购商城，对于刚上手的我来说感觉处处和 Vue.js 差不多呀，反正就是无脑使用数据绑定，然后 render 就收工了，一直没有去了解 React 诞生的原因。如果你也一直用着 React.js 但是不了解它的历史，那么希望这篇文章可以帮到你。

## 简单的加减器
我们先来做一个简音的加减器，要求
1. 显示一个数字
2. 点击按钮+，数字加1
3. 点击按钮-，数字减1
使用原生的 DOM API，我们可能会写出这样的代码：
```html
<div>
    <span id="result">0</span>
    <button id="add">+</button>
    <button id="minus">-</button>
</div>
```
```javascript
let result = document.querySelector('#result')
let add = document.querySelector('#add')
let minus = document.querySelector('#minus')

add.addEventListener('click', function () {
    // Turn to number
    let number = parseInt(result.innerText)
    number += 1
    result.innerText = number
})

minus.addEventListener('click', function () {
    // Turn to number
    let number = parseInt(result.innerText)
    number -= 1
    result.innerText = number
})
```
这里的代码无非就是
1. 先获取要用的元素
2. 每次点击先获取值，然后进行处理（加减法）
3. 最后再赋上新值
这就是我们经常说的“意大利面条”代码，跟语文老师说的“你的文章写得跟流水账一样”。怎么才能避免这样的写法呢？答案：将代码抽象。

## 思路
我们现在的思路就是下图这样的。
![](https://upload-images.jianshu.io/upload_images/2979799-8a9424289ab3cb2c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
React 程序员这时候想要是能把上面的获取步骤去掉就好了：
* 我不从 DOM 元素里取，而是在 JS 里直接生成一个 DOM 元素
* 每次值改变的时候，重新将这个元素渲染（清除，修改，追加）

## 虚拟 DOM
生成 DOM 元素当然不是就用 `document.createElement` 那么简单了，我们希望创建 DOM 的时候把其下面的子元素和属性都带上一并创建，一个好的创建函数可以是这样的：
```javascript
createElement(RootElement root, Attributes {}, Children [])
```
有了这个创建元素的函数后我们就可以不用在 HTML 里写元素了，直接用这个函数创建就好。
```html
<div id="root"></div>
```
这样写JS就更容易理解了。
```javascript
let number = 0
let add = () => {
    number += 1
    render()
}

let minus = () => {
    number -= 1
    render()
}

let render = () => {
    let span = React.createElement('span', { className: 'red' }, number)
    let addBtn  = React.createElement('button', {onClick: add}, '+')
    let minusBtn = React.createElement('button', {onClick: minus}, '-')
    let div = React.createElement('div', { className: 'parent' }, span, addBtn, minusBtn)
    ReactDOM.render(div, document.querySelector('#root'))
}

render()
```
现在我们的思路是：点击 => 修改数据 => 渲染，去掉了取值的操作。

## JSX 的发明
这时候 React 程序员还是觉得不好，这一大坨的`React.createElement`很zz，所以他们做了下面的3件事：
1. 先将`React.createElement`用`h`来代替，即`let h = React.createElement`。嗯，这样代码缩短了一点点
2. 将一次使用过的变量直接传入创建`div`的`React.createElement`里，所以变成这样
```javascript
let div =
    h( 'div', { className: 'parent' },
        h('span', { className: 'red' }, number),
        h('button', {onClick: add}, '+'),
        h('button', {onClick: minus}, '-'))
```
3. 这时候有没有突然发现这样的代码和我们的 HTML 有点像啊？`div` 是父元素，其它的都是子元素，只要缩进缩得好，一切好像都能用 HTML 代码来表示
```
let trans = `
    <div class="parent">
        <span class="red">number</span>
        <button onclick="add">+</button>
        <button onclick="minus">-</button>
    </div>`
```
所以 JSX 就被发明出来了，为了能够区分变量和字符串，变量要用`{}`来包住变量，而且为了和 HTML 区分 onclick 变成 onClick、class 变成 className
```
let jsx = `
    <div className="parent">
        <span className="red">{number}</span>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>
    </div>`
```
看看用 Babel 翻译后的结果
![Babel 转译后的结果.png](https://upload-images.jianshu.io/upload_images/2979799-c4581376da9fb675.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 最终React版本
直接使用 JSX 语法就是我们 React 一直使用的样子了。
```javascript
let number = 0
let add = () => {
    number += 1
    render()
}

let minus = () => {
    number -= 1
    render()
}

let render = () => {
    ReactDOM.render(
        <div className="parent">
            <span className="red">{number}</span>
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
        </div>,
        document.querySelector('#root'))
}

render()
```
很多人开始学 React 的时候一直觉得虚拟 DOM 是什么高大上的东西，其实简单来说就是假的 DOM。为什么呢？因为不过是通过对象来创建 DOM 元素罢了，如
```javascript
let attr = {
    className: "parent",
    text: 'hello'
}
React.createElement(root, attr, childElement)
```
所以虚拟 DOM 其实就是表示真实 DOM 元素的对象而已。
（完）