// We need to create a store to access the state with redux

import { createStore,applyMiddleware ,compose} from "redux";
import reducers from "./reducers";

// Middleware to make async calls. Needed also to make dispatch calls from components as dispatch is an async function
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
