
import Header from "../component/header";
import Footer from "../component/footer";
import MainContent from "../component/mainContent";
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Javascript() {
  return (
    <>
      <Helmet>
        <title>Javascript Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <Header />
      <MainContent pageName="JavaScript" />
      <Footer />
    </>
  );
}

export default Javascript;
