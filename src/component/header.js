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

import { useNavigate } from "react-router-dom";

const Header = () => {
  // use Context
  const { name, theme, changeName, changeThemes } = useContext(ThemeProvider);
  // sign out
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  return (
    <div className={`myHeader ${theme}`}>
      <header className="hide-when-mobile colorRed">
        <Link to="/">
          <h1>Courses four Arab</h1>
        </Link>

        <ul className="flex">
          {/* Sign in */}
          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/signin">
                Sign In
              </NavLink>
            </li>
          )}

          {/* Sign up */}
          {!user && (
            <li className="main-list">
              <NavLink className="main-link" to="/signup">
                Sign Up
              </NavLink>
            </li>
          )}

          {/* Sign out */}
          {user && (
            <li className="main-list">
              <Link
                className="main-link"
                onClick={() => {
                  signOut(auth)
                    .then(() => {
                      // Sign-out successful.
                      navigate("/");
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

          {/* About */}
          <li className="main-list">
            {user && (
              <NavLink className="main-link" to="/about">
                About
              </NavLink>
            )}
          </li>

          {/* Icon Profile */}
          <li className="main-list">
            {user && (
              <NavLink className="main-link" to="/profile">
                <i class="fa-solid fa-user"></i>{" "}
              </NavLink>
            )}
          </li>
        </ul>

        {/* Icon Dark  */}
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
          <h1>C4a.div</h1>
        </Link>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <Link className="about-mobile" to="/about">
              About
            </Link>
          </div>
        </div>

        <li className="main-list">
          {user && (
            <NavLink className="main-link" to="/profile">
              <i class="fa-solid fa-user"></i>{" "}
            </NavLink>
          )}
        </li>
        
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
