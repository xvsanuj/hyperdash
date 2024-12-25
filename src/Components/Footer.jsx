import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "@remixicon/react";

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
      // Here you would typically handle the newsletter subscription
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="min-h-[70vh] w-full bg-[#1C1C1C] px-40 py-16">
      <div className="mb-16">
        <h2 className="text-white text-4xl font-semibold mb-2">Subscribe to our newsletter</h2>
        <p className="text-gray-400 mb-6">Stay updated with our latest news and releases</p>
        
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
          <div key={index} className="flex flex-col gap-6">
            <h3 className="text-xl font-semibold capitalize">{category}</h3>
            <div className="flex flex-col gap-4">
              {links.map((link, linkIndex) => (
                <Link 
                  key={linkIndex} 
                  to="/" 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
