import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { RiMenuFill } from "@remixicon/react";
import Lenis from "lenis";
import gsap from "gsap";

const Navbar = () => {
  const navbarRef = useRef(null);
  const previousScrollY = useRef(0);

  const navLinks = {
    left: ["Air X", "Lexo Z", "Gravity 9"],
    right: ["Shop", "Account"]
  };

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      duration: 1.2,
    });

    const handleScroll = (event) => {
      const currentScrollY = event.scroll;

      if (currentScrollY > previousScrollY.current) {
        gsap.to(navbarRef.current, {
          y: "-100%",
          duration: 1,
          ease: "power2.out",
        });
      } else if (currentScrollY < previousScrollY.current) {
        gsap.to(navbarRef.current, {
          y: "0%",
          duration: 1,
          ease: "power2.out",
        });
      }

      previousScrollY.current = currentScrollY;
    };

    lenis.on("scroll", handleScroll);

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.off("scroll", handleScroll);
      lenis.destroy();
    };
  }, []);

  return (
    <div
      ref={navbarRef}
      className="h-[10vh] fixed z-50 top-0 left-0 w-full bg-[#222] text-white flex justify-between items-center px-32"
    >
      <div className="flex gap-14">
        {navLinks.left.map((link, index) => (
          <Link key={index} to="/">{link}</Link>
        ))}
      </div>
      <div>
        <img
          className="h-6 object-contain"
          src="./image.png"
          alt=""
        />
      </div>
      <div className="flex gap-14">
        {navLinks.right.map((link, index) => (
          <Link key={index} to="/">{link}</Link>
        ))}
        <span>
          <RiMenuFill />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
