import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import Specifications from "./Pages/Specifications";
import useLenis from "./Components/Lenis";
import NumericalSpecs from "./Pages/NumericalSpecs";
import DramaticFeatures from "./Pages/DramaticFeatures";
import Outflow from "./Pages/Outflow";
import Stories from "./Pages/Stories";
import Footer from "./Components/Footer.jsx";

const App = () => {
  useLenis();
  return (
    <div>
        <Navbar />
        <Home />
        <Features />
        <Specifications />
        <NumericalSpecs />
        <DramaticFeatures />
        <Outflow />
        <Stories />
        <Footer />
    </div>
  );
};

export default App;
