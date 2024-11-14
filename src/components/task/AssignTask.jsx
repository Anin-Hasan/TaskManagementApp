import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setSelectedEmployee,
  setTaskDescription,
  assignTask,
} from "../../features/tasks/tasksSlice";

const AssignTask = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state.employees.employees);
  const selectedEmployee = useSelector((state) => state.tasks.selectedEmployee);
  const taskDescription = useSelector((state) => state.tasks.taskDescription);

  const handleAssignTask = (e) => {
    e.preventDefault();
    dispatch(assignTask());
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg font-poppins shadow-md">
      <h2 className="text-2xl font-bold mb-4">Assign Task</h2>
      <form onSubmit={handleAssignTask} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 font-poppins">
            Select Employee
          </label>
          <select
            value={selectedEmployee}
            onChange={(e) => dispatch(setSelectedEmployee(e.target.value))}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select an employee</option>
            {employees.map((emp) => (
              <option key={emp.id} value={emp.id}>
                {emp.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 font-poppins">
            Task
          </label>
          <input
            type="text"
            value={taskDescription}
            onChange={(e) => dispatch(setTaskDescription(e.target.value))}
            placeholder="Task description"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Assign Task
        </button>
      </form>
    </div>
  );
};

export default AssignTask;
