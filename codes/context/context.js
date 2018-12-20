import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

let n = 100;

function F1(props) {
    return (
        <div className="bordered">
            111, {props.n1}
            <F2 />
        </div>
    );
}

function F2(props) {
    return (
        <div className="bordered">
            222,{props.n2}
            <F3 />
        </div>
    );
}

function F3(props) {
    return (
        <div className="bordered">
            3333, <NContext.Consumer>{n => <F4 n4={n} />}</NContext.Consumer>
        </div>
    );
}

function F4(props) {
    return <div className="bordered">4444, {props.n4}</div>;
}

// 首先创建 Context
const NContext = React.createContext(100);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            n: 99
        };
    }
    render() {
        return (
            <NContext.Provider value="99">
                <div className="App">
                    <F1 />
                </div>
            </NContext.Provider>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
