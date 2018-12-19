import React, {Component} from 'react'
import { connect } from 'react-redux'

class App extends Component {
    render() {
        return (
            <div className="App">
                Clicked: <span id="value">{this.props.n}</span> times
                <div>
                    <button id="add1" onClick={this.props.add1.bind(this)}>+1</button>
                    <button id="add2" >+2</button>
                    <button id="addIfOdd" >Increment if odd</button>
                    <button id="addAsync" >Increment async</button>
                </div>
            </div>
        )
    }
}

// 将部分 store 里的 state 映射到 props 上
function mapStateToProps(state) {
    return {
        n: state.n
    }
}

// 生成 action 相关操作
const mapDispatchToProps =  {
    add1: () => {
        return { type: 'add', payload: 1 }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
