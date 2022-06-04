import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MoreAboutBeema from './components/MoreAbout';
import ServiceSection from './components/ServicesSection';

function App() {
  return (
    <div>
      <Header />
      <ServiceSection />
      <MoreAboutBeema />
      <Footer />
    </div>
  );
}

export default App;
