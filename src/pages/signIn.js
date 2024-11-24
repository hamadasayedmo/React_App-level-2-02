/* eslint-disable no-unused-vars */
import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { useState, useContext } from "react";
import ThemeProvider from "../context/ContextData";

// sign in
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firbasee/config";

import { useNavigate } from "react-router-dom";

const SignIn = () => {
  // use Context
  const { theme } = useContext(ThemeProvider);

  // sign in
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  // sign in error msg
  const [hasError, sethasError] = useState(false);
  const [firebaseError, setfirebaseError] = useState("");

  const navigate = useNavigate();

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
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Pass Word Pleas"
              required
              onChange={(e) => {
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
                    console.log("good");
                    const user = userCredential.user;
                    navigate("/");
                    // ...
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;

                    sethasError(true);

                    switch (errorCode) {
                      case "auth/invalid-email":
                        setfirebaseError("Wrong Email")
                        break;
  
                      case "auth/user-not-found":
                        setfirebaseError("Wrong Email")
                        break;
      
                      case "auth/wrong-password":
                        setfirebaseError("Wrong Password")
                        break;
    
                      case "auth/too-many-requests":
                        setfirebaseError("Too many requests, please try aganin later")
                        break;
  
                      default:
                        setfirebaseError("Please check your email & password")
                        break;
                    }

                    
                  });
              }}
            />
          </form>

          {hasError && (
            <p style={{ color: "red" }}>{firebaseError}</p>
          )}

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
