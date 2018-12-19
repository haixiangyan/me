import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const stateChanger = (state, action) => {
    if (state === undefined) {
        return { n: 0 }
    }
    else {
        if (action.type === 'add') {
            let newState =  {
                n: state.n + action.payload
            }
            return newState
        }
        else {
            return state
        }
    }
}

const store = createStore(stateChanger)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
