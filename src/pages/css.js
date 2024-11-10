
import Header from '../component/header';
import Footer from "../component/footer";
import MainContent from "../component/mainContent";
import { Helmet, HelmetProvider } from 'react-helmet-async';


function Css() {
  return (
    <>
      <Helmet>
        <title>CSS Page</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      
      <Header />
      <MainContent pageName="CSS"/>
      <Footer />
    </>
  );
}

export default Css;
