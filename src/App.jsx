import React from "react";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import WhyChoose from "./sections/WhyChoose";
import Services from "./sections/Services";
import Gallery from "./sections/Gallery";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import Kemon from "./sections/Kemon";
const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <WhyChoose />
      <Kemon />
      <Services />
      <Gallery />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
