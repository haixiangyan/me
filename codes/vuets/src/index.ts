import Vue from 'vue'
import Frank from './Frank.vue'
import { b } from './test'

console.log('test: ' + b)

let div = document.createElement('div')

div.id = 'app'
div.textContent = 'Hello World'

document.body.appendChild(div)

new Vue({
    el: div,
    render: (h) => h(Frank)
})
