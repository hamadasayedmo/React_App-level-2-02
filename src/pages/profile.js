import React from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { Helmet } from "react-helmet-async";

// handel date
import Moment from "react-moment";

import { auth } from "../firbasee/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) navigate("/");
  });

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
    return (
      <>
        <Helmet>
          <title>Profile</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>

        <Header />

        {user && (
          <main>
            <div>
              <p>User Name : {user.displayName}</p>
              <p>Email : {user.email}</p>
              <p>
                Created : <Moment fromNow date={user.metadata.creationTime} />
              </p>
              <p>
                Last SignIn Time :{" "}
                <Moment fromNow date={user.metadata.lastSignInTime} />
              </p>
            </div>
            <button className="action">Delete Account</button>
          </main>
        )}

        <Footer />
      </>
    );
  }
};

export default Profile;