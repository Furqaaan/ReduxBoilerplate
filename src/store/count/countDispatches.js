import * as actions from "./countActionTypes";

// functions to return the dispatch objects

export const INCREMENT_COUNT = (count) => {
    return {
        type: actions.INCREMENT_COUNT,
        payload: count
    }
}