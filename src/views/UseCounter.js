import { useState } from "react";
import { Counter } from "../components/Counter";

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const reset = () => setCount(initialValue);
  const increase = () => setCount((count) => count + 1);
  const decrease = () => setCount((count) => count - 1);
  const setValue = (value) => setCount(value);

  return {
    count,
    reset,
    increase,
    decrease,
    setValue,
  };
};

export default function UseCounter() {
  const counterProps = useCounter();

  return <Counter {...counterProps} />;
}
