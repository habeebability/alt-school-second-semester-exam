import React from "react";
import useReducerImg from "../assets/use-reducer.jpeg";

export const Counter = (props) => {
  const { count, increase, decrease, reset, setValue } = props;

  return (
    <div className={props.className}>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-start">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-2 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={useReducerImg}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Counter using useReducer
            </h1>
            <p className="mb-8 leading-relaxed">
              Using use-reducer to do basic calculations on number such as
              increment, decrement and reset number value.
            </p>

            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                <span className="font-bold text-2xl md:text-4xl text-purple-800">
                  {count}
                </span>

                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setValue(parseInt(event.target.elements[0].value));
                    event.target.elements[0].value = 0;
                    console.log("clicked something");
                  }}
                >
                  <div className="add-number">
                    <label
                      htmlFor="number-input"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Add a Number
                    </label>
                    <div className="flex space-x-3">
                      <input
                        type="number"
                        id="number-input"
                        name="number-input"
                        className="number-input w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-purple-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        required
                      />

                      <button className="add-btn inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">
                        Add
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="buttons-list space-x-3 my-3">
              <button
                onClick={decrease}
                className="inline-flex text-white bg-red-500 border-0 py-2 px-5 focus:outline-none hover:bg-red-600 rounded"
              >
                Decrease
              </button>
              <button
                onClick={increase}
                className="inline-flex text-white bg-green-500 border-0 py-2 px-5 focus:outline-none hover:bg-green-600 rounded"
              >
                Increase
              </button>
              <button
                onClick={reset}
                className="inline-flex text-white bg-orange-500 border-0 py-2 px-5 focus:outline-none hover:bg-orange-600 rounded"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <h1>{count}</h1> */}
      {/* <form
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
      </div> */}
    </div>
  );
};
