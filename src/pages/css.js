import Header from "../component/header";
import Footer from "../component/footer";
import MainContent from "../component/mainContent";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { auth } from "../firbasee/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Css() {
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
          <title>CSS Page</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>

        <Header />
        <MainContent pageName="CSS" />
        <Footer />
      </>
    );
  }
}

export default Css;
