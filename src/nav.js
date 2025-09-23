import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./assets/images/Teen_Titans_-_logo_(English).png";

function Nav({ username, onLoginClick, onLogout }) {
  return (
    <nav className="tt-nav">
      <div className="tt-container">
        <div className="tt-nav__container">
          <NavLink to="/home" className="tt-nav__brand">
            <img 
              src={logo} 
              alt="Teen Titans Logo" 
              className="tt-nav__logo tt-float"
            />
          </NavLink>

          <ul className="tt-nav__links">
            <li>
              <NavLink 
                to="/home" 
                className={({ isActive }) => 
                  `tt-nav__link ${isActive ? 'tt-nav__link--active' : ''}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `tt-nav__link ${isActive ? 'tt-nav__link--active' : ''}`
                }
              >
                About
              </NavLink>
            </li>
            {!username ? (
              <li>
                <button 
                  onClick={onLoginClick}
                  className="tt-nav__link tt-nav__link--button"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    font: 'inherit',
                    padding: 'var(--space-sm) var(--space-md)',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'all var(--transition-base)',
                    position: 'relative'
                  }}
                >
                  Login
                </button>
              </li>
            ) : (
              <li>
                <button 
                  onClick={onLogout}
                  className="tt-nav__link tt-nav__link--button"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    font: 'inherit',
                    padding: 'var(--space-sm) var(--space-md)',
                    borderRadius: 'var(--radius-sm)',
                    transition: 'all var(--transition-base)',
                    position: 'relative'
                  }}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>

          {username && (
            <div className="tt-nav__user">
              <span className="tt-badge">
                👋 Hello, {username}!
              </span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
