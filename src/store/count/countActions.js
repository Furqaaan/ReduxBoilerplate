// Action creators are functions that dispatches an action
// Action creators returns a function which has dispatch as a parameter 
// This dispatch is then called from inside the return function

import * as dispatches from "./countDispatches";

export const INCREMENT_COUNT = (count) => {
    return (dispatch) => {
        dispatch(dispatches.INCREMENT_COUNT(count));
    }
} 
