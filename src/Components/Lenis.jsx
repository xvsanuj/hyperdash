import { useEffect } from 'react';
import Lenis from 'lenis';

const useLenis = () => {
  const lenis = new Lenis({
    smooth: true,
    speed: 10,
    duration: 2,
  });

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);

  return () => {
    lenis.destroy();
  };
};

export default useLenis;
