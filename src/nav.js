import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "./assets/images/Teen_Titans_-_logo_(English).png";

function Nav({ username }) {
  const location = useLocation();

  const showGreeting = username && location.pathname !== "/login";

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/home">
            <img src={logo} alt="Teen Titans Logo" style={{ height: "40px" }} />
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/home">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Us</NavLink>
              </li>
            </ul>

            {showGreeting && (
              <span className="navbar-text ms-auto">
                Hello, {username}
              </span>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
