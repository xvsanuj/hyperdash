import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

const useLenis = () => {
  const lenis = new Lenis({
    smooth: true,
    speed: 10,
    duration: 2,
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return () => {
    lenis.destroy();
  };
};

export default useLenis;
