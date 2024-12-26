import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { RiMenuFill } from "@remixicon/react";
import Lenis from "lenis";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const navRef = useRef(null);
  const navLinks = {
    left: ["Air X", "Lexo Z", "Gravity 9"],
    right: ["Shop", "Account"]
  };

  useGSAP(() => {
    const leftLinks = document.querySelectorAll('.left-link span');
    const rightLinks = document.querySelectorAll('.right-link span');
    const logo = document.querySelector('.logo');

    gsap.from([leftLinks, rightLinks, logo], {
      y: -100,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out"
    });
  });

  return (
    <div
      ref={navRef}
      className="h-[10vh] relative z-50 w-full bg-[#222] text-white flex justify-between items-center px-32"
    >
      <div className="flex gap-14">
        {navLinks.left.map((link, index) => (
          <Link key={index} to="/" className="left-link relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:-bottom-[2px] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
            <span className="inline-block">{link}</span>
          </Link>
        ))}
      </div>
      <div className="logo">
        <img
          className="h-6 object-contain"
          src="./image.png"
          alt=""
        />
      </div>
      <div className="flex gap-14 items-center">
        {navLinks.right.map((link, index) => (
          <Link key={index} to="/" className="right-link cursor-pointer relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:-bottom-[2px] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
            <span className="inline-block">{link}</span>
          </Link>
        ))}
        <span className="right-link">
          <span className="inline-block">
            <span className="text-white text-xs">
              <RiMenuFill />
            </span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
