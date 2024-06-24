import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-yellow-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="font-bold text-5xl">
          VishTrip
        </Link>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-zinc-900 focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-end"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="lg:flex lg:space-x-4">
            <Link
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-zinc-900 hover:text-gray-500 mr-4"
            >
              Home
            </Link>
            <Link
              to="/hotels"
              className="block mt-4 lg:inline-block lg:mt-0 text-zinc-900 hover:text-gray-500 mr-4"
            >
              Hotels
            </Link>
            <Link
              to="/about"
              className="block mt-4 lg:inline-block lg:mt-0 text-zinc-900 hover:text-gray-500 mr-4"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
