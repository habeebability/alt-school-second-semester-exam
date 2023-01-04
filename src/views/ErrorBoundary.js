import React, { useState } from "react";

const ErrorBoundary = () => {
  const [isError, setIsError] = useState(false);

  if (isError) {
    throw new Error("Has Error");
  }
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div>
        <button
          className="text-white bg-red-600"
          onClick={() => {
            setIsError(true);
          }}
        >
          Check Error{" "}
        </button>
        <h1 className="my-4">
          Once you click the button Above, the Code Breaks
        </h1>
      </div>
    </div>
  );
};

export default ErrorBoundary;
