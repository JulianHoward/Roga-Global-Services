import { Helmet } from 'react-helmet';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Destinations from './components/Destinations';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
      <Helmet>
        <title>Roga Global Services - Your Global Partner</title>
        <meta name="description" content="Explore our top destinations for business expansion and global connections." />
        <meta name="keywords" content="global business, expansion, destinations, international, Roga Global" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Header />
      <Hero />
      <WhatWeDo />
      <Destinations />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
