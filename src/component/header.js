import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./header.css";

import { useContext } from "react";
import ThemeProvider from "../context/ContextData";

import { useAuthState } from "react-firebase-hooks/auth";

// sign out
import { auth } from "../firbasee/config";
import { signOut } from "firebase/auth";

const Header = () => {
  // use Context
  const { name, theme, changeName, changeThemes } = useContext(ThemeProvider);
  // sign out
  const [user, loading, error] = useAuthState(auth);

  return (
    <div className={`myHeader ${theme}`}>
      <header className="hide-when-mobile colorRed">
        <Link to="/">
          <h1>Courses four Arab</h1>
        </Link>
        <ul className="flex">
          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/signin">
                Sign In
              </NavLink>
            </li>
          )}

          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/signup">
                Sign Up
              </NavLink>
            </li>
          )}

          {user && (
            <li className="main-list">
              <Link
                className="main-link"
                onClick={() => {
                  signOut(auth)
                    .then(() => {
                      // Sign-out successful.
                    })
                    .catch((error) => {
                      // An error happened.
                    });
                }}
              >
                Sign out
              </Link>
            </li>
          )}

          <li className="main-list">
            <NavLink className="main-link" to="/html">
              HTML
            </NavLink>
            {/* <ul className="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul> */}
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/css">
              CSS
            </NavLink>
            {/* <ul className="sub-ul">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li className="mini-projects">
                <a href="">mini projects&nbsp; + </a>
                <ul className="sub-sub-ul">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul> */}
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              JavaScript
            </NavLink>
            {/* <ul className="sub-ul sub-of-js">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul> */}
          </li>
        </ul>

        <i
          onClick={() => {
            changeThemes(theme === "light" ? "dark" : "light");
            changeName(name === "Light" ? "Dark" : "Light");
          }}
          className="toggle-dark-mode fa-solid fa-moon"
        ></i>
        <i
          onClick={() => {
            changeThemes(theme === "light" ? "dark" : "light");
            changeName(name === "Light" ? "Dark" : "Light");
          }}
          className="toggle-dark-mode fa-solid fa-sun"
        ></i>
      </header>

      <header className="show-when-mobile colorRed">
        <Link to="/">
          <h1>Courses four Arab</h1>
        </Link>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              HTML <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">Crash Course</a>
              </li>
              <li>
                <a href="">learn in 1h</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              CSS <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">Full Course</a>
              </li>
              <li>
                <a href="">CSS Examples</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  mini projects <i className="fas fa-plus" />
                </label>
                <input id="mini" type="checkbox" />
                <ul className="sub-sub-div">
                  <li>
                    <a href="">project 1</a>
                  </li>
                  <li>
                    <a href="">project 2</a>
                  </li>
                  <li>
                    <a href="">project 3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              JavaScript <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <a href="">coming soon🔥</a>
              </li>
            </ul>
          </div>
        </div>
        <i
          onClick={() => {
            changeThemes(theme === "light" ? "dark" : "light");
            changeName(name === "Light" ? "Dark" : "Light");
          }}
          className="toggle-dark-mode fa-solid fa-moon"
        ></i>
        <i
          onClick={() => {
            changeThemes(theme === "light" ? "dark" : "light");
            changeName(name === "Light" ? "Dark" : "Light");
          }}
          className="toggle-dark-mode fa-solid fa-sun"
        ></i>
      </header>
    </div>
  );
};

export default Header;
