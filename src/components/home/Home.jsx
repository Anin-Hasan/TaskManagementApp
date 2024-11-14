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
        <input
          type="text"
          placeholder="Search employees..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mt-2 mb-4 px-4 py-2 w-1/3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
      <div className="mt-8">
        <EmployeeList employees={filteredEmployees} />
      </div>
    </div>
  );
};

export default Home;
