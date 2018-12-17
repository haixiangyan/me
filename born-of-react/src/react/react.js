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
    let h = React.createElement
    // let div =
    //     h( 'div', { className: 'parent' },
    //         h('span', { className: 'red' }, number),
    //         h('button', {onClick: add}, '+'),
    //         h('button', {onClick: minus}, '-'))

    ReactDOM.render(
        <div className="parent">
            <span className="red">{number}</span>
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
        </div>,
        document.querySelector('#root'))
}

render()
