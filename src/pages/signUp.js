import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { useState } from "react";
import ThemeProvider from "../context/ContextData";

// Create a new account
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

// user state
import { auth } from "../firbasee/config";
import { useAuthState } from "react-firebase-hooks/auth";

import { useNavigate } from "react-router-dom";

const SignUp = () => {
  // use Context
  const { theme } = useContext(ThemeProvider);

  // Sign up
  const [username, setUserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const [user, loading, error] = useAuthState(auth);

  if (loading) {
    return (
      <>
        <Header />
        <main>
          <h1>Loading</h1>
        </main>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <p>Error..........</p>
      </>
    );
  }

  if (user) {
    if (user.emailVerified) {
      return (
        <>
          <Header />
          <main>
            <h1>
              Welcome : {user.displayName} <span>🧡</span>
            </h1>
          </main>
          <Footer />
        </>
      );
    }

    if (!user.emailVerified) {
      return (
        <>
          <Header />
          <main>
            <p>we send you an email to verify your account</p>
          </main>
          <Footer />
        </>
      );
    }
  }

  if (!user) {
    return (
      <div>
        <>
          <Helmet>
            <title>Sign Up</title>
            <link rel="canonical" href="https://www.tacobell.com/" />
          </Helmet>

          <Header />

          <main className={`myHeader ${theme}`}>
            {true && (
              <div style={{ marginBottom: "10px" }}>
                Create a new Account <span>🧡</span>
              </div>
            )}
            <form action="" method="">
              <input
                type="text"
                name="username"
                placeholder="userName"
                required
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
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
                placeholder="Enter PassWord"
                required
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
              <input
                type="submit"
                value="Sign Up"
                className="btn"
                onClick={(e) => {
                  e.preventDefault();

                  createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                      sendEmailVerification(auth.currentUser).then(() => {
                        console.log("i'm ready to send email");
                      });

                      // Signed in
                      const user = userCredential.user;
                      updateProfile(auth.currentUser, {
                        displayName: username,
                      })
                        .then(() => {
                          // Profile updated!
                          // ...
                        })
                        .catch((error) => {
                          // An error occurred
                          console.log(error.code);
                        });
                    })
                    .catch((error) => {
                      const errorMessage = error.message;
                      console.log(errorMessage);
                      // ..
                    });
                }}
              />
            </form>
            <div className="signin-to-signup">
              <p>
                Do you have an account{" "}
                <Link to="/signin" className="link">
                  Sign in
                </Link>
              </p>
            </div>
          </main>
          <Footer />
        </>
      </div>
    );
  }
};

export default SignUp;
