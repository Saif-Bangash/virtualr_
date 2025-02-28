import { useState } from "react";
import logoImg from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for toggling the menu on mobile

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu open/close
  };

  return (
    <header className="bg-gray-900">
      <nav className="shadow-md">
        <div className="container max-w-6xl mx-auto py-4 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-2xl flex justify-center items-center px-2 font-extrabold text-gray-100 hover:text-amber-500 transition duration-300"
          >
            <img src={logoImg} alt="logo" className="w-12 h-auto mr-2" />
            VIRTUALR
          </a>

          {/* Navbar Menu (on larger screens) */}
          <ul className="hidden lg:flex justify-center items-center gap-12 text-gray-200 font-medium">
            <li>
              <a
                href="#"
                className="hover:bg-amber-500 py-2 px-4 rounded-lg transition duration-300 hover:text-gray-900"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-amber-500 py-2 px-4 rounded-lg transition duration-300 hover:text-gray-900"
              >
                Workflow
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-amber-500 py-2 px-4 rounded-lg transition duration-300 hover:text-gray-900"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:bg-amber-500 py-2 px-4 rounded-lg transition duration-300 hover:text-gray-900"
              >
                Testimonial
              </a>
            </li>
            {/* Desktop view (lg and up) */}
            <div className="hidden lg:flex  space-x-5 items-center">
              <button className="border border-amber-500 text-amber-500 font-semibold p-3  text-sm rounded-lg hover:bg-amber-500 hover:text-gray-900 transition duration-300">
                Sign in
              </button>
              <button className="bg-amber-600 p-3  font-semibold rounded-lg text-white hover:bg-amber-700 transition duration-300">
                Create an account
              </button>
            </div>
          </ul>

          {/* Hamburger Menu Button (for medium and small screens) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-gray-200 focus:outline-none relative w-8 h-8 flex flex-col justify-between items-center space-y-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-1 bg-gray-200 rounded transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-1 bg-gray-200 rounded transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-1 bg-gray-200 rounded transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu (visible when 'isOpen' is true for both medium and small screens) */}
        <div
          className={`lg:hidden ${
            isOpen ? "block" : "hidden"
          } transition-all duration-300 transform ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <ul className="flex flex-col bg-gray-800 py-5 gap-6">
            <li>
              <a
                href="#"
                className="text-gray-200 hover:bg-amber-500 py-3 px-4 rounded-lg transition duration-300 hover:text-gray-900"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-200 hover:bg-amber-500 py-3 px-4 rounded-lg transition duration-300 hover:text-gray-900"
              >
                Workflow
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-200 hover:bg-amber-500 py-3 px-4 rounded-lg transition duration-300 hover:text-gray-900"
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-200 hover:bg-amber-500 py-2 px-4 rounded-lg transition duration-300 hover:text-gray-900"
              >
                Testimonial
              </a>
            </li>
            {/* Move the buttons inside the mobile menu */}
          <div className="space-x-5 p-5">
            <button className="border border-amber-500 text-amber-500 font-semibold px-5 py-2 text-sm rounded-lg hover:bg-amber-500 hover:text-gray-900 transition duration-300 w-full mb-3">
              Sign in
            </button>
            <button className="bg-amber-600 px-5 py-2 font-semibold rounded-lg text-white hover:bg-amber-700 transition duration-300 w-full">
              Create an account
            </button>
          </div>
          </ul>

          
        </div>
      </nav>
    </header>
  );
};

export default Header;
