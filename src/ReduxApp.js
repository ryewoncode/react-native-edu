import React from 'react';

import { Provider } from "react-redux";
import { createStore } from "redux";

import Products from "./Products";
import rootReducer from "./rootReducer";

const ReduxApp = () => {
    const store = createStore(rootReducer);
    return (
        <Provider store={store}>
            <Products />
        </Provider>
    )
}

export default ReduxApp;