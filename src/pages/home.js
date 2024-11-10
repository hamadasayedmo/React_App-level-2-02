import Header from '../component/header';
import Footer from "../component/footer";
import MainContent from "../component/mainContent";
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>

      <style type="text/css">{`
        body {
            background-color: gold;
        }
      `}</style>

      <Header />
      <MainContent pageName="Home" />
      <Footer />
    </>
  );
}

export default Home;
