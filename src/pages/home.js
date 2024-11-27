import Header from "../component/header";
import Footer from "../component/footer";
import MainContent from "../component/mainContent";
import { Helmet } from "react-helmet-async";
// State User
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firbasee/config";
import { Link } from "react-router-dom";
function Home() {
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
      <>
        <Helmet>
          <title>Home Page</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>

        <Header />
        <main>
          <p>
            Please{" "}
            <Link className="pls" style={{ fontSize: "30px" }} to="/signin">
              sign in
            </Link>{" "}
            to continue... 🧡
          </p>
        </main>
        <Footer />
      </>
    );
  }
}

export default Home;
