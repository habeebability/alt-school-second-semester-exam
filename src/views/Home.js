import React from "react";
import { Link } from "react-router-dom";
import "../../src/home.css";

import homeBanner from "../assets/code-image.jpeg";

const Home = () => {
  return (
    // <div className="home-page">
    //   <h1>Alt school second semester exam</h1>
    //   <p className="home-heading">some useful links</p>
    //   <button type="button" className="btn">
    //     {<Link to="/use-reducer ">Check out counter with</Link>}
    //   </button>{" "}
    //   <button type="button" className="btn">
    //     {<Link to="/error-boundary ">Check out Errors</Link>}
    //   </button>{" "}
    // </div>
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={homeBanner}
              />
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                    Habeeb Awoyemi
                  </h2>
                  <div className="w-12 h-1 bg-purple-600 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Alt school second semester exam update in the holiday
                    challenge. Project built with reactjs and interface improved
                    with tailwindcss.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h2 className="font-bold text-purple-600 my-3">
                  Alt School Second Semester Exam
                </h2>
                <p className="leading-relaxed text-lg mb-4">
                  In this project, I built a counter app which using{" "}
                  <strong>useReducer</strong> and <strong>Custom Hook</strong>.
                  I have improved the old project by adding Tailwindcss, making
                  my Navbar a component rather than just hard coding it in my
                  app file. I also added active link color to the nav links to
                  indicate which page we are currently on.
                </p>
                <span className="text-purple-500 inline-flex items-center cursor-pointer hover:ml-2 transition all duration-300">
                  <Link to="/use-reducer">Check the Counter App</Link>

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
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
