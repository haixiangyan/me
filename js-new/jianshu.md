# 你真的了解JS里的new吗？
![](https://upload-images.jianshu.io/upload_images/2979799-6755086afbfb54b0.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 前言
我们常常喜欢用`new`关键字去创建一些对象如`new Vue()`，但是这个关键字的背后究竟做了什么其实没太多人去关注。

想象我们是苹果公司，要生产30部iPod，规定：
* 每台iPod都会有自己的ID
* 每台iPod都是一样的制造商：Apple
* 每台iPod的功能都是一样的（函数一样）

```javascript
let iPod= {
    // 制造商不会变
    manufacturer: 'Apple',
    // 播放音乐
    play: function () { },
    // 暂停
    pause: function () { },
    // 继续播放
    resume: function () { }
}
```

好了，现在我们开始生产吧。

## 简单生产
要生产那么多iPod，那就循环30次吧。每次循环都创建一个对象，将这个对象加入到数组里就行了。
```javascript
let box = []
let iPod

for (let i = 0; i < 30; i++) {
    iPod= {
        // 每次都改变 ID
        id: i,
        // 制造商不会变
        manufacturer: 'Apple',
        // 播放音乐
        play: function () {},
        // 暂停
        pause: function () {},
        // 继续播放
        resume: function () {}
    }

    box.push(iPod)
}

Manufacturer.deliver(box)
```
但是，这里有一个问题：每次都会新创建`play()`，`pause()`，`resume()`这些函数，`manufacturer`的值也是一样，没必要重新建。

## 使用原型改进
使用原理链，我们可以将上面说到的共有函数，属性放在一个共有对象里，然后用`iPod.__proto__`指向这个`iPodCommon`不就好了吗？所以现在代码可以改写成这样：
```javascript
let box = []
let iPod

let iPodCommon = {
    // 制造商不会变
    manufacturer: 'Apple',
    // 播放音乐
    play: function () {},
    // 暂停
    pause: function () {},
    // 继续播放
    resume: function () {}
}

for (let i = 0; i < 30; i++) {
    iPod= {
        // 每次都改变 ID
        id: i,
    }

    iPod.__proto__ = iPodCommon

    box.push(iPod)
}

Manufacturer.deliver(box)
```
这样就好多了，省了很多空间。但是这个iPod对象的代码有点太分散了，跟for循环耦合在一起了。学习重构时听得最多的一句就是重复代码最好用函数包起来，所以我们可以试着传入要改变的属性（ID）用函数来返回iPod对象。，

## 函数返回对象
我们可以用一个函数返回iPod对象，这样就不用每次都在for循环里去定义对象了。
```javascript
function iPod(id) {
    let tempObj = { }
    // 自有属性
    tempObj.id = id
    // 共有属性，函数
    tempObj.__proto__ = iPod.common

    return tempObj
}

iPod.common = {
    // 制造商不会变
    manufacturer: 'Apple',
    // 播放音乐
    play: function () {},
    // 暂停
    pause: function () {},
    // 继续播放
    resume: function () {}
}
// 保存为 iPod.js 文件
```
然后在创建时候引入这个文件，再去生成iPod。
```javascript
let box = []

for (let i = 0; i < 30; i++) {
    box.push(iPod(i))
}

Manufacturer.deliver(box)
```
有没有感觉这样清爽了很多？我们将所有有关iPod的逻辑都放在一个文件里，这样就和主文件完全解耦了。

## new
上面是很清爽，但是每次都要写创建一个临时对象好麻烦。这时候JS的new就上场了，它的作用如下：
1. 帮你创建临时对象`tempObj`，函数里的`this`绑定为这个`tempObj`
2. 统一共有属性所在对象的名字叫`prototype`而不是`comon`
3. 帮你完成原型的绑定
4. 帮你返回临时对象`tempObj`
现在iPod.js文件可以写成这样
```javascript
function iPod(id) {
    this.id = id
}

// 共有属性
iPod.prototype = {
    // 制造商不会变
    manufacturer: 'Apple',
    // 播放音乐
    play: function () {},
    // 暂停
    pause: function () {},
    // 继续播放
    resume: function () {}
}
// 保存为 iPod.js 文件
```
使用`new`再次生产iPod
```javascript
let box = []

for (let i = 0; i < 30; i++) {
    box.push(new iPod(i))
}

Manufacturer.deliver(box)
```
这就是`new`的由来，不过是一种语法糖，和Java里面的`new`是完全不一样的东西，希望大家不要混为一谈。当然了，最后的这个`iPod`函数也就成了我们所说的**构造函数**。