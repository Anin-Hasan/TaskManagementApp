import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  deleteEmployee,
  setEditingEmployee,
  hideMessage,
} from "../../features/savedEmployees/savedEmployeesSlice";

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const employee = useSelector((state) =>
    state.employees.employees.find((emp) => emp.id === id)
  );

  const tasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.employeeId === id)
  );

  if (!employee) {
    return <p className="text-center text-red-500">Employee not found</p>;
  }

  const handleEditEmployee = () => {
    dispatch(setEditingEmployee(employee));
    navigate("/employees");
  };

  const handleDeleteEmployee = () => {
    dispatch(deleteEmployee(employee.id));
    setTimeout(() => dispatch(hideMessage()), 3000);
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-8 bg-white rounded-lg shadow-lg font-poppins">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Employee Details
      </h2>
      <div className="mb-4">
        <p className="text-gray-700">
          <strong>ID:</strong> {employee.id}
        </p>
        <p className="text-gray-700">
          <strong>Name:</strong> {employee.name}
        </p>
        <p className="text-gray-700">
          <strong>Designation:</strong> {employee.designation}
        </p>
        <p className="text-gray-700">
          <strong>Email:</strong> {employee.email}
        </p>
        <p className="text-gray-700">
          <strong>Phone:</strong> {employee.phone}
        </p>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          Assigned Tasks
        </h3>
        {tasks.length === 0 ? (
          <p className="text-gray-600">No tasks assigned</p>
        ) : (
          <ul className="list-disc list-inside text-gray-700">
            {tasks.map((task) => (
              <li key={task.id}>{task.description}</li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex gap-4 mt-8">
        <button
          onClick={handleEditEmployee}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Edit
        </button>
        <button
          onClick={handleDeleteEmployee}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default EmployeeDetails;
