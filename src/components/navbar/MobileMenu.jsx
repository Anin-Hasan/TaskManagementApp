import React from "react";
import NavLink from "./NavLink";

const MobileMenu = ({ isOpen, toggleMenu }) => {
  return (
    <div
      className={`fixed h-56 mt-[3.9rem] inset-0 z-50 bg-black bg-opacity-75 transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-4">
        <NavLink to="/" onClick={toggleMenu}>
          Home
        </NavLink>
        <NavLink to="/employees" onClick={toggleMenu}>
          Employees
        </NavLink>
        <NavLink to="/assign-task" onClick={toggleMenu}>
          Assign Task
        </NavLink>
        <NavLink to="/tasks" onClick={toggleMenu}>
          Tasks
        </NavLink>
      </div>
    </div>
  );
};

export default MobileMenu;
