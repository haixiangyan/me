import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const themeContext = React.createContext();

function Button() {
    return <button>Click</button>;
}

function Input() {
    return <input type="text" />;
}

function Box(props) {
    return <div className={`box ${props.theme}`}>{props.children}</div>;
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            theme: "green"
        };
    }
    change = () => {
        if (this.state.theme === "green") {
            this.setState({
                theme: "red"
            });
        } else {
            this.setState({
                theme: "green"
            });
        }
    };
    render() {
        return (
            <themeContext.Provider value={this.state.theme}>
                <div className="App">
                    <button onClick={this.change}>Change</button>
                    <themeContext.Consumer>
                        {theme => (
                            <div>
                                <Box theme={theme}>
                                    <Button />
                                </Box>
                                <Box theme={theme}>
                                    <Input />
                                </Box>
                            </div>
                        )}
                    </themeContext.Consumer>
                </div>
            </themeContext.Provider>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
