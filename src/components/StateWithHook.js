import { useSelector, useDispatch } from "react-redux";
import * as actionCreators from "../store/count/countActions";
import { bindActionCreators } from "redux";

const StateWithHook = () => {
    // we have access to all the state items by using this hook
    let state = useSelector((state) => state);
    console.log("State using Hooks", state);

    // getting access to the dispatch function
    let dispatch = useDispatch();

    // linking the dispatch with our action creators
    let { incrementCount } = bindActionCreators(actionCreators, dispatch);

    const handleIncrement = () => {
        incrementCount(10);
    };

    return (
        <div className="App">
            {state.count} <button onClick={handleIncrement}>+ 10</button>
        </div>
    );
};

export default StateWithHook;
