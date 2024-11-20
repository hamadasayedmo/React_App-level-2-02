import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { useState } from "react";
import ThemeProvider from "../context/ContextData";

// Create a new account
import { auth } from "../firbasee/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useNavigate } from "react-router-dom";


const SignUp = () => {
  // use Context
  const { theme } = useContext(ThemeProvider);

  // Sign up
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

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
            <div style={{marginBottom: "10px"}}>
              Create a new Account <span>🧡</span>
            </div>
          )}
          <form action="" method="">
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
                    // Signed in
                    const user = userCredential.user;
                    console.log("doneeeeeeeeee");
                    navigate("/");
                    // ...
                  })
                  .catch((error) => {
                    const errorCode = error.code;
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
};

export default SignUp;
