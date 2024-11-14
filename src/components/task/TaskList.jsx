import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTask,
  setEditingTask,
  updateTaskDetails,
  saveTask,
  cancelEdit,
} from "../../features/tasks/tasksSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, editingTaskId, newTaskDescription, newEmployeeId } =
    useSelector((state) => state.tasks);
  const employees = useSelector((state) => state.employees.employees);

  const [searchQuery, setSearchQuery] = useState("");

  const handleEditTask = (taskId) => {
    dispatch(setEditingTask(taskId));
  };

  const handleUpdateTaskDetails = (e) => {
    const { name, value } = e.target;
    dispatch(updateTaskDetails({ name, value }));
  };

  const handleSaveTask = () => {
    dispatch(saveTask());
  };

  const handleCancelEdit = () => {
    dispatch(cancelEdit());
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const filteredTasks = tasks.filter((task) =>
    task.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg font-poppins shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Task List
      </h2>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mt-1 mb-4 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      />
      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available</p>
      ) : (
        <ul className="space-y-4">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex flex-col p-4 bg-gray-100 rounded-md shadow-sm"
            >
              {editingTaskId === task.id ? (
                <>
                  <label
                    className="block text-gray-700 font-bold mb-2"
                    htmlFor={`task-${task.id}`}
                  >
                    Task Description
                  </label>
                  <input
                    type="text"
                    id={`task-${task.id}`}
                    name="newTaskDescription"
                    value={newTaskDescription}
                    onChange={handleUpdateTaskDetails}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                  <label
                    className="block text-gray-700 font-bold mb-2 mt-4"
                    htmlFor={`employee-${task.id}`}
                  >
                    Assign to Employee
                  </label>
                  <select
                    id={`employee-${task.id}`}
                    name="newEmployeeId"
                    value={newEmployeeId}
                    onChange={handleUpdateTaskDetails}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select an employee</option>
                    {employees.map((emp) => (
                      <option key={emp.id} value={emp.id}>
                        {emp.name}
                      </option>
                    ))}
                  </select>
                  <div className="space-x-2 mt-4">
                    <button
                      onClick={handleSaveTask}
                      className="bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancelEdit}
                      className="bg-gray-500 text-white py-1 px-3 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <p className="text-lg font-semibold">{task.description}</p>
                    <p className="text-sm text-gray-600">
                      Assigned to:{" "}
                      {
                        employees.find((emp) => emp.id === task.employeeId)
                          ?.name
                      }
                    </p>
                  </div>
                  <div className="space-x-2 mt-2">
                    <button
                      onClick={() => handleEditTask(task.id)}
                      className="bg-blue-500 text-white py-1 px-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteTask(task.id)}
                      className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskList;
