import React, {Component} from 'react'

class App extends Component {
    add1() {
        this.props.store.dispatch({
            type: 'add',
            payload: 1
        })
    }
    add2() {
        this.props.onAdd2()
    }
    add3() {
        this.props.onAdd3()
    }
    add4() {
        this.props.onAdd4()
    }
    render() {
        return (
            <div className="App">
                Clicked: <span id="value">{this.props.value}</span> times
                <div>
                    <button id="add1" onClick={this.add1.bind(this)}>+1</button>
                    <button id="add2" onClick={this.add2.bind(this)}>+2</button>
                    <button id="addIfOdd" onClick={this.add3.bind(this)} >Increment if odd</button>
                    <button id="addAsync" onClick={this.add4.bind(this)}>Increment async</button>
                </div>
            </div>
        )
    }
}

export default App
