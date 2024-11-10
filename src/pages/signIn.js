import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { useContext } from "react";
import ThemeProvider from "../context/ContextData";

const SignIn = () => {
  // use Context
  const { theme } = useContext(ThemeProvider);

  return (
    <div>
      <>
        <Helmet>
          <title>Sign In</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>

        <Header />

        <main className={`myHeader ${theme}`}>
          <form action="">
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Pass Word Pleas"
              required
            />
            <input type="submit" value="Sign in" className="btn" />
          </form>
          <div className="signin-to-signup">
            <p>
              Don't have an account{" "}
              <Link to="/signup" className="link">
                Sign Up
              </Link>
            </p>
          </div>
        </main>

        <Footer />
      </>
    </div>
  );
};

export default SignIn;
