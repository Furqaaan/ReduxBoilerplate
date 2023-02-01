// We need to create a store to access the state with redux

import { createStore } from "redux";
import reducers from "./reducers";

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // this is for redux toolkit extension to work
);

export default store;
