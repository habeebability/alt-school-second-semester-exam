// import logo from './logo.svg';

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./views/Home";
import ErrorBoundaryPage from "./views/ErrorBoundary";
import UseCounter from "./views/UseCounter";

import ErrorBoundary from "./components/ErrorBoundaryComponent.js";
import UseReducer from "./views/UseReducer";
import Error404 from "./views/Error404";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/use-reducer">UseReducer</Link>
          <Link to="/use-counter">CustomHook</Link>
          <Link to="/error-boundary">ErrorBoundary</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/use-counter" element={<UseCounter />}></Route>
          <Route path="/use-reducer" element={<UseReducer />}></Route>
          <Route path="/error-boundary" element={<ErrorBoundaryPage />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
