import React, { useState } from "react";

const ErrorBoundary = () => {
  const [isError, setIsError] = useState(false);

  if (isError) {
    throw new Error("Has Error");
  }
  return (
    <div>
      <button
        onClick={() => {
          setIsError(true);
        }}
      >
        Check Error{" "}
      </button>
      <h1>There is an Error, Damn!</h1>
    </div>
  );
};

export default ErrorBoundary;
