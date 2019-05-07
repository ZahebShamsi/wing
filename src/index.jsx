import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux';
import { createStore } from "redux";
// import   store  from './store'
import  rootReducer from "./reducers/rootReducer";

const storeMain  = createStore(rootReducer,
                                window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store = { storeMain } >
        <App/>
    </Provider>
    , document.getElementById("root"));