import React, { useState } from "react";
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
import RevealAnimation from "./Pages/RevealAnimation";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const App = () => {
  useLenis();
  const cursorRef = useRef(null)
  const [cursorVisible, setCursorVisible] = useState(false)
  useEffect(() => {
    const cursor = cursorRef.current
    window.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY
      })
    })
    window.addEventListener("drag", (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY
      })
    })
  }, [])

  return (
    <div>
        <Navbar />
        <Home />
        <RevealAnimation />
        <NumericalSpecs />
        <DramaticFeatures />
        <Outflow />
        <Stories setCursorVisible={setCursorVisible} />
        <Footer />
        <div ref={cursorRef} className={`custom-cursor h-24 w-24 bg-white backdrop-blur-xl rounded-full fixed top-0 left-0 flex justify-center items-center pointer-events-none z-50 ${cursorVisible ? "opacity-100 h-24 w-24" : "opacity-0 h-0 w-0"}`}>
          <p className="text-black font-medium">Drag</p>
        </div>
    </div>
  );
};

export default App;
