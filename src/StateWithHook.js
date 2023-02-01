import { useSelector } from "react-redux";

const StateWithHook = () => {
    
    // we have access to all the state items by using this hook
    let state = useSelector((state) => state);
    console.log("State using Hooks", state);

    return <div className="App">{state.count}</div>;
};

export default StateWithHook;
