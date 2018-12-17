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
