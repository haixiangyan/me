let app = document.getElementById('app')

// constructor this.state = 0
let state = 0

// render
let div = document.createElement('div')
div.style.border = '1px solid red'

div.innerHTML = `
    <p>${state}</p>
    <button>+1</button>
    <button>die</button>
`

// componentWillMount
// Mount div
app.appendChild(div)
// Did mount div

div.querySelector('button').onclick = () => {
    state += 1
    // Update div
    div.querySelector('p').innerHTML = state // render
    // Did update div
}

div.querySelectorAll('button')[1].onclick = () => {
    div.querySelector('button').onclick = null
    div.querySelectorAll('button')[0].onclick = null
    div.remove()
    div = null // Destroy
}
