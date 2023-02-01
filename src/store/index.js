// Changed deprecated createStore to new ReduxToolkit configureStore
// Redux toolkit has redux dev tool extension and combine reducers inbuilt and it automatically calls create store

import countReducer from "./count/countReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        count: countReducer,
    },
});

export default store;


/*

OLDER VERSION
-------------------

// We need to create a store to access the state with redux

import { createStore,applyMiddleware ,compose} from "redux";
import reducers from "./reducers";

// Middleware to make async calls. Needed also to make dispatch calls from components as dispatch is an async function
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store; 


*/

