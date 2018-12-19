let createStore = Redux.createStore
let reducers = (state, action) => {
    state = state || {
        money: { amount: 10000 }
    }
    switch (action.type) {
        case 'Pay':
            return {
                money: {
                    amount: state.money.amount - action.payload
                }
            }
            break
        default:
            return state
    }
}
const store = createStore(reducers)
console.log(store.getState())

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="root">
                <Parent1 money={this.props.store.money}/>
                <Parent2 money={this.props.store.money}/>
            </div>
        )
    }
}

class Parent1 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="parent">
                Parent 1 {this.props.money.amount}
                <Son1 money={this.props.money}/>
                <Son2 money={this.props.money}/>
            </div>
        )
    }
}

class Parent2 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="parent">
                Parent 2 {this.props.money.amount}
                <Son3 money={this.props.money}/>
                <Son4 money={this.props.money}/>
            </div>
        )
    }
}

class Son1 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="son">Son 1 {this.props.money.amount}</div>
        )
    }
}

class Son2 extends React.Component {
    constructor(props) {
        super(props)
    }

    pay() {
        store.dispatch({ type: 'Pay', payload: 100 })
    }

    render() {
        return (
            <div className="son">
                Son 2 {this.props.money.amount}
                <button onClick={() => this.pay()}>Pay</button>
            </div>
        )
    }
}

class Son3 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="son">Son 3 {this.props.money.amount}</div>
        )
    }
}

class Son4 extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="son">Son 4 {this.props.money.amount}</div>
        )
    }
}

function render() {
    ReactDOM.render(<App store={store.getState()}/>, document.querySelector('#app'))
}

render()
store.subscribe(render)
