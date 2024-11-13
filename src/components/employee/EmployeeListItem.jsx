import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  deleteEmployee,
  setEditingEmployee,
  hideMessage,
} from "../../features/savedEmployees/savedEmployeesSlice";

const EmployeeListItem = ({ employee }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEditEmployee = () => {
    dispatch(setEditingEmployee(employee));
    navigate("/employees");
  };

  const handleDeleteEmployee = () => {
    dispatch(deleteEmployee(employee.id));
    setTimeout(() => dispatch(hideMessage()), 3000);
  };

  const handleViewDetails = () => {
    navigate(`/employee/${employee.id}`);
  };

  return (
    <li className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md font-poppins cursor-pointer">
      <div>
        <p
          className="text-lg font-semibold text-blue-600 hover:underline"
          onClick={handleViewDetails}
        >
          {employee.name}
        </p>
        <p className="text-sm text-gray-500">{employee.designation}</p>
      </div>
      <div className="space-x-2">
        <button
          onClick={handleEditEmployee}
          className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Edit
        </button>
        <button
          onClick={handleDeleteEmployee}
          className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default EmployeeListItem;
