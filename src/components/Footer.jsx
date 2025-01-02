import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#29615a] text-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold">MFC Solutions</h1>
            <p className="text-sm mt-2">
              Driving sustainability and innovation with Microbial Fuel Cell technology.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center md:text-left">
            <ul className="space-y-3">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/technology" className="hover:underline">
                  Technology
                </a>
              </li>
              <li>
                <a href="/order" className="hover:underline">
                  Order
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="text-center lg:text-right">
            <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
            <div className="flex justify-center lg:justify-end space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center border-t border-blue-700 pt-4 text-sm">
          © {new Date().getFullYear()} MFC Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
