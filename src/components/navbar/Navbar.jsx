import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import MobileMenu from "./MobileMenu";
import "../../styles/Navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-600 p-4 font-poppins">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">TODO APP</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/employees">Employees</NavLink>
          <NavLink to="/assign-task">Assign Task</NavLink>
          <NavLink to="/tasks">Tasks</NavLink>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
