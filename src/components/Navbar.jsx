import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">TODO APP</Link>
        </div>
        <div className="space-x-4">
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
      </div>
    </nav>
  );
};

export default Navbar;
