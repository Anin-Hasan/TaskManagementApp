import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white  text-lg font-bold">
          <Link to="/">TODO APP</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/employees" className="text-white hover:text-gray-300">
            Employees
          </Link>
          <Link to="/assign-task" className="text-white hover:text-gray-300">
            Assign Task
          </Link>
          <Link to="/tasks" className="text-white hover:text-gray-300">
            Tasks
          </Link>
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
      {isOpen && (
        <div className="md:hidden">
          <Link
            to="/"
            className="block text-white hover:text-gray-300 py-2 px-4"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/employees"
            className="block text-white hover:text-gray-300 py-2 px-4"
            onClick={toggleMenu}
          >
            Employees
          </Link>
          <Link
            to="/assign-task"
            className="block text-white hover:text-gray-300 py-2 px-4"
            onClick={toggleMenu}
          >
            Assign Task
          </Link>
          <Link
            to="/tasks"
            className="block text-white hover:text-gray-300 py-2 px-4"
            onClick={toggleMenu}
          >
            Tasks
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
