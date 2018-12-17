# Do you really know new in JS?

![](https://cdn-images-1.medium.com/max/12000/1*ofMfrqFMfpaTH_RMvI_RQA.jpeg)

We like to use new to create objects in JS, like new Vue() but usually don’t care about what it really does behind this keyword. In my opinion, it’ s just a syntax sugar. Let’s find out how it saves our time when we create objects.

Let’s say we are company Apple and want to produce 30 iPods. Here are some rules:

 1. Each iPod has its own ID

 2. Each iPod belongs to manufacturer: Apple

 3. Functionalities of each iPod are same

Then we have:

    let iPod= {
        // Same manufacturer
        manufacturer: 'Apple',
        // Play music
        play: function () { },
        // Pause music
        pause: function () { },
        // Resume music
        resume: function () { }
    }

## Produce 30 iPods

To produce 30 iPods, we loop 30 times. For each iteration, it creates an iPod object and puts the object into an array.

    let box = []
    let iPod
    
    for (let i = 0; i < 30; i++) {
        iPod= {
            // Each iteration it assigns different ID
            id: i,
            // Same manufacturer
            manufacturer: 'Apple',
            // Same functionalities
            play: function () {},
            pause: function () {},
            resume: function () {}
        }
    
        box.push(iPod)
    }
    
    Manufacturer.deliver(box)

We find out a problem: Each time it creates new functions play() , pause(), resume() and property manufacture. They should be shared by these iPod objects instead of owned by each iPod object.

## Improve with prototype

We can put these common property and functions into an object and use iPod.__proto__ point to that object. According to feature of prototype in JS, iPod object will find them through prototype chain. Now we have:

    let box = []
    let iPod
    
    let iPodCommon = {
        // Same manufacturer
        manufacturer: 'Apple',
        // Same functionalities
        play: function () {},
        pause: function () {},
        resume: function () {}
    }
    
    for (let i = 0; i < 30; i++) {
        iPod= {
            // Each time it assigns a new ID
            id: i,
        }
    
        iPod.__proto__ = iPodCommon
    
        box.push(iPod)
    }
    
    Manufacturer.deliver(box)

This version will save more spaces, but iPod object is coupled with the for loop. It’s better to put the declaration of iPod object to another JS file.

## Return objects with function

To put objet iPodCommon and declaration together, we can use a function to return objects.

    function iPod(id) {
        let tempObj = { }
        // Own property
        tempObj.id = id
        // Share common property and functions
        tempObj.__proto__ = iPod.common
    
        return tempObj
    }
    
    iPod.common = {
        // Same manufacturer
        manufacturer: 'Apple',
        // Same functionalities
        play: function () {},
        pause: function () {},
        resume: function () {}
    }
    // Save as iPod.js file

Then we import this file before we produce iPod.

    let box = []
    
    for (let i = 0; i < 30; i++) {
        box.push(iPod(i))
    }
    
    Manufacturer.deliver(box)

This version is more clear, but each time we do lots of things before returning an object. That’s why we have keyword new . Here are the things it will help us to do:

 1. Help you create temp object tempObj, keyword this in function binds to tempObj

 2. The name of object that contains shared properties and functions is supposed to be iPod.prototype rather than iPod.common

 3. Help you to bind prototype: tempObj.__proto__ = iPod.prototype

 4. Help you to return tempObj

Now we have a new iPod.js:

    function iPod(id) {
        this.id = id
    }

    // Shared properties and functions
    iPod.prototype = {
        // Same manufacturer
        manufacturer: 'Apple',
        // Same functionalities
        play: function () {},
        pause: function () {},
        resume: function () {}
    }
    // Save as iPod.js file

This time we use new to produce iPod.

    let box = []

    for (let i = 0; i < 30; i++) {
        box.push(new iPod(i))
    }

    Manufacturer.deliver(box)

This is the reason we need keyword new. It’s just a syntax sugar that saves your time for creating object. The function iPod is what we call **constructor**.

(End)
