import Header from "../component/header";
import Footer from "../component/footer";
import MainContent from "../component/mainContent";
import { Helmet } from "react-helmet-async";
// Protected page
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firbasee/config";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Html() {
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
          <title>Html Page</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>

        <Header />
        <MainContent pageName="HTML" />
        <Footer />
      </>
    );
  }
};

export default Html;
