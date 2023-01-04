import React from "react";
// import { Link } from "react-router-dom";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { isError: true };
  }

  componentDidCatch(error, errorMessage) {
    // You can also log the error to an error reporting service
    console.log(error, errorMessage);
  }

  render() {
    if (this.state.isError) {
      // You can render any custom fallback UI
      return (
        <div className="flex h-screen justify-center items-center">
          <div>
            <h1>Something went wrong!</h1>;
            {/* <span className="text-purple-500 inline-flex items-center cursor-pointer hover:ml-2 transition all duration-300">
              <Link to="/">Go Back to Home page</Link>

              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </span> */}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
