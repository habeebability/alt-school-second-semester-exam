import React from "react";
import { Link } from "react-router-dom";
import "../../src/home.css";

const Home = () => {
  return (
    <div className="home-page">
      <h1>Alt school second semester exam</h1>
      <p className="home-heading">some useful links</p>
      <button type="button" className="btn">
        {<Link to="/use-reducer ">Check out counter with</Link>}
      </button>{" "}
      <button type="button" className="btn">
        {<Link to="/error-boundary ">Check out Errors</Link>}
      </button>{" "}
    </div>
  );
};

export default Home;
