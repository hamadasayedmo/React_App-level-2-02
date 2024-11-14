import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { useState } from "react";
import ThemeProvider from "../context/ContextData";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firbasee/config";

const SignIn = () => {
  // use Context
  const { theme } = useContext(ThemeProvider);

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

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
              onChange={(e)=> {
                setemail(e.target.value);
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Pass Word Pleas"
              required
              onChange={(e)=> {
                setpassword(e.target.value);
              }}
            />
            <input
              type="submit"
              value="Sign in"
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                signInWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    // Signed in
                    console.log('good');
                    const user = userCredential.user;
                    // ...
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                  });
              }}
            />
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
