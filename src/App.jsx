import React from 'react';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Destinations from './components/Destinations';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <>
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
