// We could have multiple reducers in our project , so we combine all reducers together

import { combineReducers } from "redux";
import countReducer from "./count/countReducer";

const reducers = combineReducers({
    count: countReducer,
});

// Now we have a reducers object with all reducers combined that can be accessed using their keys

export default reducers;
