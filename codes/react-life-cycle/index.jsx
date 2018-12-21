import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class Parent extends React.Component {
    constructor() {
        super();
        this.state = {
            hasChild: true,
            word: ""
        };
    }

    onClick() {
        this.setState({
            hasChild: false
        });
    }
    callChild() {
        this.setState({
            word: "Hello child"
        });
    }

    render() {
        return (
            <div>
                <p>Parent</p>
                <button onClick={() => this.onClick()}>Kill me</button>
                <button onClick={() => this.callChild()}>Call child</button>
                {this.state.hasChild ? <Child word={this.state.word} /> : null}
            </div>
        );
    }
}

class Child extends React.Component {
    onClick() {
        console.log("clicked");
        this.setState({
            n: this.state.n + 1
        });
    }
    constructor(props) {
        super(props);
        this.state = {
            n: 0
        };
        console.log("run constructor");
    }
    componentWillMount() {
        console.log("will mount");
    }
    componentWillReceiveProps() {
        console.log("receive props");
    }
    render() {
        console.log("render / update");
        return (
            <div style={{ border: "1px solid black" }} className="App">
                <p>{this.state.n}</p>
                <p>Parent: {this.props.word}</p>
                <button onClick={() => this.onClick()}>Click</button>
            </div>
        );
    }
    componentDidMount() {
        console.log("did mount");
    }
    componentWillUpdate() {
        console.log("will update");
    }
    // update === render
    componentDidUpdate() {
        console.log("did update");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("should update?");
        return nextState.n % 2 === 0;
    }

    componentWillUnmount() {
        console.log("will unmount");
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Parent />, rootElement);
