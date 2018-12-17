# let 和 const
![](https://upload-images.jianshu.io/upload_images/2979799-cffba2f5da7c4fd1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

let 和 const 关键字是 ES6 的新语法，主要用来取代 var 来定义变量。ES6 出了这么一个简单的新语法其实足以说明JS有很多不好的地方，而其中之一就是变量声明。

## var
以前我们声明变量一般用`var a= 1`，但是会带来很多不好的副作用。
### 变量的提升
参考下面的代码
```javascript
function fn() {
    if (true) {
        console.log(a + ' now')
    }
    else {
        var a = 1
        console.log(2)
    }
}

fn() // a -> undefined
```
我们发现不执行的代码也会影响会执行的代码，因为`var a`会提升到`if语句`的前面，改写后会变成。
```javascript
function fn() {
    var a
    if (true) {
        console.log(a + ' now')
    }
    else {
        a = 1
        console.log(2)
    }
}

fn() // a -> undefined
```
### 全局变量
在以前的JS版本中，作用域只能是函数作用域才有效。
```javascript
var a = 1 // 声明全局变量 a = 1
```
为了不使用全局变量，我们一般使用立即执行函数来包住局部变量。
```javascript
!function() {
    var a = 1 // 声明了一个非全局变量

    window.frank = function () {
        console.log('Now: ' + a)
    }
}()
frank()
```

## let
let 和 const 的出现解决了上面的两个问题。
### 不存在变量提升
```javascript
{
    console.log(a) // undefined
    let a = 1
}
```
变量`a`不会在`console.log(a)`之前声明。`console.log(a)`将会打印出`undefined`，因为`a`是在后面才声明的，我们将`console.log(a)`这个区域称为**临时死区**。

**临时死区**听起来感觉很高大上，其实只是访问了还未声明的变量的代码区域罢了。

### 块级局部变量
```
{
    let a = 1
}
console.log(a) // undefined
```
这里的`a`就是块级里的变量，块级外不能被访问。

### const
const 的特性和 let 完全一样，不同的只是
* 只能进行一次赋值
* 声明时候必须赋值
```javascript
const a
a = 1 // Missing initializer in const declaration
```

```javascript
const a = 1
a = 2 // Assignment to constant variable
```
## 总结
### let 
1. `let` 的作用域在最近的 {} 之间
2. 如果你在 `let a` 之前使用变量 `a`，那么报错
3. 如果你重复 `let a`，那么报错

### const
1. 1.2.3 同上
2. 只有一次赋值机会，不能只声明不赋值，必须在声明的时候立马赋值

## 面试题
### 简单的Demo
```javascript
for (let i = 0; i < 5; i++) {
    console.log(i)
}
```
上面的代码我们知道打印结果是 0, 1, 2, 3, 4，但是你们有没有想过这个变量`i`的作用域到底是什么呢？

有人说在这个`for`循环里呀，但是我这里想说的是这个`i`作用域是在括号`()`里。正常的代码是这样的：
1. 首先这个变量`_i`的作用域是在`()`里才有效的，循环体里是不能访问到`_i`的
2. 每次循环的时候创建一个`i`变量，将括号里的`_i`赋值到变量`i`上
3. 最后`i++`后再将变量`i`的值赋值回`_i`上

当然这个过程是很复杂的，可以用下面代码理解，但是JS的实现机制是很复杂的，这里想要说明的`let i`的作用域有时候并不是我们所理解的那样的。
```javascript
for (let _i = 0; i < 5; i++) {
    let i = _i
    console.log(i)
    // i++ 先做
    _i = i
}
```