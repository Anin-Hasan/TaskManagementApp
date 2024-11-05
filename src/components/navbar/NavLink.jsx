import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({ to, children, onClick }) => {
  return (
    <Link
      to={to}
      className="text-white font-poppins hover:text-gray-300 py-2 px-4"
      onClick={onClick}
    >
      {children}
    </Link>
  );
};

export default NavLink;
