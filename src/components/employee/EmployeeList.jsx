import React from "react";
import EmployeeListItem from "./EmployeeListItem";

const EmployeeList = ({ employees }) => {
  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg font-poppins shadow-md">
      <h2 className="text-2xl font-bold mb-4">Employee List</h2>
      {employees.length === 0 ? (
        <p className="text-center text-gray-500">No employees available</p>
      ) : (
        <ul className="space-y-4">
          {employees.map((emp) => (
            <EmployeeListItem key={emp.id} employee={emp} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
