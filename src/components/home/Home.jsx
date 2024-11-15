import React, { useState } from "react";
import EmployeeList from "../employee/EmployeeList";
import { useSelector } from "react-redux";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const employees = useSelector((state) => state.employees.employees);

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4 font-poppins">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the TODO APP</h1>
        <p className="text-lg mb-4">
          Manage your employees and tasks efficiently.
        </p>
        <div className="relative w-full max-w-xs">
          <input
            type="text"
            placeholder="Search employees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197M16.803 15.803A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <EmployeeList employees={filteredEmployees} />
      </div>
    </div>
  );
};

export default Home;
