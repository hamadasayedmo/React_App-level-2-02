import Header from "../component/header";
import Footer from "../component/footer";
import MainContent from "../component/mainContent";
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firbasee/config";
import { Link } from "react-router-dom";
function Home() {
  const [user, loading, error] = useAuthState(auth);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <Header />
      {user && (
        <main>
          <h1>Welcome : {user.displayName} <span>🧡</span></h1>
        </main>
      )}
      {!user && (
        <main>
          <p>
            Please{" "}
            <Link className="pls" style={{ fontSize: "30px" }} to="/signin">
              sign in
            </Link>{" "}
            to continue... 🧡
          </p>
        </main>
      )}
      <Footer />
    </>
  );
}

export default Home;
