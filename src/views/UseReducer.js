import { useReducer } from "react";
import { Counter } from "../components/Counter";

const reducer = (state, action) => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    case "setValue":
      return { count: action.payload };
    case "reset":
      return { count: 0 };
    default:
      throw new Error("something went wrong");
  }
};

function Reduce() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <Counter
      className="use-reducer"
      count={state.count}
      increase={() => dispatch({ type: "increase" })}
      decrease={() => dispatch({ type: "decrease" })}
      reset={() => dispatch({ type: "reset" })}
      setValue={(value) => dispatch({ type: "setValue", payload: value })}
    />
  );
}

export default Reduce;
