import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "@remixicon/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const footerLinks = {
    products: ["Air X", "Lexo Z", "Gravity 9"],
    company: ["Fleet", "Company", "Stories"],
    support: ["Contact", "FAQ", "Help Center"],
    legal: ["Privacy", "Terms", "Licenses"]
  };
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Subscribe text animation
    const subscribeSpans = document.querySelectorAll('.subscribe-text span');
    gsap.from(subscribeSpans, {
      y: 100,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".subscribe-text",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Subscribe subtext animation
    const subscribeSubSpans = document.querySelectorAll('.subscribe-text-sub span');
    gsap.from(subscribeSubSpans, {
      y: 100,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".subscribe-text-sub",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Category text animation
    const categorySpans = document.querySelectorAll('.category-text span');
    gsap.from(categorySpans, {
      y: 100,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".category-text",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });

    // Link text animation
    const linkSpans = document.querySelectorAll('.link-text span');
    gsap.from(linkSpans, {
      y: 100,
      duration: 1,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".link-text",
        start: "top 80%",
        toggleActions: "play none none reverse"
      }
    });
  });

  return (
    <footer className="min-h-[70vh] w-full bg-[#1C1C1C] px-40 py-16">
      <div className="mb-16">
        <h2 className="text-white text-4xl font-semibold mb-2">
          <span className="subscribe-text flex items-center gap-2 h-fit overflow-hidden">
            <span key="subscribe" className="text-white text-4xl font-semibold inline-block mb-2">Subscribe</span>
            <span key="to" className="text-white text-4xl font-semibold inline-block mb-2">to</span>
            <span key="our" className="text-white text-4xl font-semibold inline-block mb-2">our</span>
            <span key="newsletter" className="text-white text-4xl font-semibold inline-block mb-2">newsletter</span>
          </span>
        </h2>
        <span className="text-gray-400 mb-6 block">
          <span className="subscribe-text-sub flex items-center gap-1 h-fit overflow-hidden">
            <span key="stay" className="text-gray-400 inline-block mb-2">Stay</span>
            <span key="updated" className="text-gray-400 inline-block mb-2">updated</span>
            <span key="with" className="text-gray-400 inline-block mb-2">with our</span>
            <span key="latest" className="text-gray-400 inline-block mb-2">latest news</span>
            <span key="releases" className="text-gray-400 inline-block mb-2">and releases</span>
          </span>
        </span>
        
        <form onSubmit={handleSubscribe} className="relative inline-block">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="mt-2 h-14 w-96 bg-transparent border-b border-white text-white focus:outline-none focus:border-blue-500 transition-colors"
            required
          />
          <button 
            type="submit"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-500 transition-colors"
          >
            <RiArrowRightLine size={24} />
          </button>
          {subscribed && (
            <p className="absolute text-green-500 mt-2">Thanks for subscribing!</p>
          )}
        </form>
      </div>

      <div className="grid grid-cols-4 gap-12 text-white">
        {Object.entries(footerLinks).map(([category, links], index) => (
          <div key={category} className="flex flex-col gap-6 mt-10">
            <h3 className="text-xl font-semibold capitalize">
              <span className="category-text flex items-center gap-2 h-fit overflow-hidden">
                <span key={category} className="text-xl font-semibold inline-block mb-2">{category}</span>
              </span>
            </h3>
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <span key={link} className="link-text flex items-center gap-2 h-fit overflow-hidden">
                  <span className="text-gray-400 inline-block">
                    <Link to={`/${category}/${link}`} className="relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bg-white after:left-0 after:-bottom-[2px] after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left">
                      {link}
                    </Link>
                  </span>
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
