import { connect } from "react-redux";
import * as countActions from "../store/count/countActions";

const StateWithoutHooks = (props) => {

    let {count,incrementCount} = props;
    console.log("State without Hooks", count);

    const handleIncrement = () => {
        incrementCount(10);
    };

    return (
        <div className="App">
            {count} <button onClick={handleIncrement}>+ 10</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        incrementCount: (data) => dispatch(countActions.INCREMENT_COUNT(data)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(StateWithoutHooks);
