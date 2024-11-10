import Header from '../component/header';
import Footer from "../component/footer";
import MainContent from "../component/mainContent";
import { Helmet } from 'react-helmet-async';

function Html() {
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

export default Html;
