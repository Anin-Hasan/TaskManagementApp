import React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = ({ to, children, onClick }) => {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `text-white font-poppins py-2 px-4 ${
          isActive
            ? "bg-blue-700 rounded-md duration-500"
            : "hover:text-gray-300"
        }`
      }
      onClick={onClick}
    >
      {children}
    </RouterNavLink>
  );
};

export default NavLink;
