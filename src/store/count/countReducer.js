// A reducer is simply a function that returns a new state;
// It takes two arguments (state,action)
// state = initial data of the state
// action = the action to be performed ; {type,payload}

import * as actions from "./countActionTypes";

//the initial state
const initialState = 10;

const reducer = (state=initialState,action) => {
    switch(action.type) {
        case actions.INCREMENT_COUNT:
            return state + action.payload;
        default:
            return state;
    }
}

export default reducer;
