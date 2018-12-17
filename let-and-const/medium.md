# let and const

![](https://cdn-images-1.medium.com/max/10368/1*JMsN-rnyB1H2q14RbQsVBw.jpeg)

Keyword let and const are the new syntax of ES6, which are used to replace var . Proposing such a simple syntax indicates that there are lots of disadvantages of JavaScript. One of these is variable declarations.

## var

There are lots of side effects of using var to declare a variable.

### Variable Hoisting

Consider codes shown below

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

Because var a will be hoisted in font of if statement, codes that are not executed will also affect the codes that will be executed. Codes can be seen as

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

### Global Variable

In the previous versions of JavaScript, the variable scope we can use is function scope. When we declare a variable outside of function, it’s easy to declare a global variable.

To avoid declaring global variables, we generally use the Immediately-invoked Function to create a local scope. I

    !function() {
        var a = 1 // Local variable
    
        window.frank = function () {
            console.log('Now: ' + a)
        }
    }()
    frank()

## let

let and const solve the problems above.

### No Hoisting

    {
        console.log(a) // undefined -> TDZ
        let a = 1
    }

console.log(a) will print out undefined , because a is declared behind this statement. In ES6, we call it **Temporal Dead Zone (TDZ)**. It’s just about using variables that haven’t been declared yet.

### Local Variable

    {
        let a = 1
    }
    console.log(a) // undefined

Out of the block, variable a can’t be visited.

## const

const is almost same as let. Differences are:

 1. Can only be assigned once

    const a
    a = 1 // Error: Missing initializer in const declaration

2. Have to assign value when it’s declared

    const a = 1
    a = 2 // Error: Assignment to constant variable 

## Summary

### let

 1. Scope of let is between {}

 2. Can’t declare same variables

 3. Can’t use variables before they are declared

### const

 1. Same as 1.2.3. above

 2. Can only be assigned once

 3. Have to assign value when it’s declared

### Do you really understand let?

Consider codes below

    for (let i = 0; i < 5; i++) {
        console.log(i)
    } 

It’s easy to understand printing results are 0, 1, 2, 3, 4, but do you really understand the scope of variable i ?

You may think that the scope is the for loop body, but that’s not correct. The scope is between (). JS will do this things during the loop:

    for (let _i = 0; i < 5; i++) {
        let i = _i
        console.log(i)
        // i++ do first
        _i = i
    }

 1. First, the scope of _i is between () , the for loop body can’t visit _i

 2. For each iteration, it creates a variable i and assigns value of _i to i

 3. After i++, it assigns value of i to _i

The actual implementation is complicated. This is just an understandable version for clarifying that _i can be only used between (). The reason why we can use _i is that JS creates a temporary variable i for us to use _i value.
