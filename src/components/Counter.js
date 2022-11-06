import React from "react";

export const Counter = (props) => {
  const { count, increase, decrease, reset, setValue } = props;

  return (
    <div className={props.className}>
      <h1>{count}</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setValue(parseInt(event.target.elements[0].value));
        }}
      >
        <div className="number-form">
          <input className="number-input" type="number" required />
          <button className="add-btn">Add a Number</button>
        </div>
      </form>
      <div className="button-group">
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
};
