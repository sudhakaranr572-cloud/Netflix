import React from "react";
import "./App.css";

import Home from "./Components/Home";
import About from "./Components/About";
import Product from "./Components/Product";

import {
  BrowserRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">MOVIX</h2>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/product">Product</Link>
          <Link to="/about">About</Link>
        </div>

        <button className="login-btn">Sign In</button>
      </nav>

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;

