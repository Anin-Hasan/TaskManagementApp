import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Employee List</h2>
      {employees.length === 0 ? (
        <p className="text-center text-gray-500">No employees available</p>
      ) : (
        <ul className="space-y-4">
          {employees.map((employee) => (
            <li
              key={employee.id}
              className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm"
            >
              <div>
                <p className="text-lg font-semibold">{employee.name}</p>
                <p className="text-sm text-gray-600">{employee.designation}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => {
                    onEdit(employee);
                    navigate("/employees");
                  }}
                  className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(employee.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmployeeList;
