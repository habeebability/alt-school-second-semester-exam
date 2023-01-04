import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="text-gray-600 body-font sticky inset-y-0 bg-white">
      {/* <nav className="nav">
           <Link to="/">Home</Link>
           <Link to="/use-reducer">UseReducer</Link>
           <Link to="/use-counter">CustomHook</Link>
           <Link to="/error-boundary">ErrorBoundary</Link>
         </nav> */}
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <NavLink
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl cursor-pointer">Alschool Exam</span>
        </NavLink>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {/* <a className="mr-5 hover:text-gray-900">First Link</a> */}
          <NavLink className="nav-link mr-5 hover:text-gray-900" to="/">
            Home
          </NavLink>
          <NavLink
            className="nav-link mr-5 hover:text-gray-900"
            to="/use-reducer"
          >
            UseReducer
          </NavLink>
          <NavLink
            className="nav-link mr-5 hover:text-gray-900"
            to="/use-counter"
          >
            CustomHook
          </NavLink>
          <NavLink
            className="nav-link mr-5 hover:text-gray-900"
            to="/error-boundary"
          >
            ErrorBoundary
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
