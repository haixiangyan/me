
## Why do we need React.js

![](https://cdn-images-1.medium.com/max/3840/1*RYFi7xkOkKPwjnCJ6b2QzA.png)

Last few months, I kept using React.js to develop an online shopping web app but never think of why they develop React.js like this. I didn’t even know why we need JSX until I read some blogs about its history. If you are using but keep ignoring the history of React.js, hope this article can help you.

### Naive calculator

Let’s start with a simple calculator. Here are requirements we need to satisfy:

 1. Display a number

 2. Click button +, then number plus one and show new result

 3. Click button -, then number minus one and show new result

We may create HTML elements like this:

    <div>
        <span id="result">0</span>
        <button id="add">+</button>
        <button id="minus">-</button>
    </div>

JS logic may be like this:

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

What we do here are:

 1. First get elements that we need

 2. Each time we click one of buttons, we get value of <span> and modify it

 3. At the end, new value is assigned to <span>

It seems pretty good and meet all the requirements. Unfortunately, this is what we call “**Spaghetti code**”. Once we have more requirements, it will be very hard to maintain our codes. To avoid writing Spaghetti codes, we have to abstract our codes in some way.

### Idea

For now, our idea is shown below.

![](https://cdn-images-1.medium.com/max/2000/1*j0QXyRJ4NGmSci0IB3-8Pg.png)

Here is the new idea of React developers:

* Define data in JS file, outside of HTML page

* After triggering click event, it modifies data in JS file and create a new DOM element with this new value

* Render new DOM element to HTML page

### Virtual DOM

We hope that it will create DOM element with assigning attributes and appending children elements instead of calling document.createElement . A good example would be like this:

    createElement(RootElement root, Attributes {}, Children [])

With the help of this function, the only thing we need to do is write a root element in HTML page and append elements to it.

    <div id="root"></div>

It will be better to understand if we apply the new idea:

Click => Modify data => Re-render (No more getting previous value)

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

### Born of JSX

For now, we have a blue print of React.js. But React.js developers think there are too much React.createElement in render. They are very annoying. So they do 3 things below:

 1. First assign React.createElement with variable h , which is let h = React.createElement . Well, it does shorten codes sightly.

 2. Then remove declaration of span , addBtn , minusBtn and pass declaration statements to the function (React.createElement) that creates div directly.

    let div =
        h( 'div', { className: 'parent' },
            h('span', { className: 'red' }, number),
            h('button', {onClick: add}, '+'),
            h('button', {onClick: minus}, '-'))

3. Does it look familiar? div is parent element, and span, button are children elements. With the help of indents, it looks like HTML syntax. We can even write it with HTML

    let trans = `
        <div class="parent">
            <span class="red">number</span>
            <button onclick="add">+</button>
            <button onclick="minus">-</button>
        </div>`

That’s how JSX came from. To distinguish variables and strings, variables should be wrapped with {} . To distinguish HTML attributes, onclick should be onClick and class should be className . This syntax is called JSX (JavaScript Extension) and adopted by Babel.

Let’s have a look the result of compilation with Babel.

![Compilation with Babel](https://cdn-images-1.medium.com/max/3792/1*-bHHXu0h2jvuy6x2CI3pNg.png)

### React.js

Now we have the final version with using JSX syntax. This coding style is recommended by React.js.

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

After going through the history of React, we realize that **Virtual DOM** is not kind of high level usage but an Object used to demonstrate a DOM (Of course, it’s not a DOM). For example:

    let attr = {
        className: "parent",
        text: 'hello'
    }
    React.createElement(root, attr, childElement)

(End)
