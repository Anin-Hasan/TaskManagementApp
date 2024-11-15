import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteTask,
  setEditingTask,
  updateTaskDetails,
  saveTask,
  cancelEdit,
  toggleTaskCompletion,
} from "../../features/tasks/tasksSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const { tasks, editingTaskId, newTaskDescription, newEmployeeId } =
    useSelector((state) => state.tasks);
  const employees = useSelector((state) => state.employees.employees);

  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

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

  const handleToggleTaskCompletion = (taskId) => {
    dispatch(toggleTaskCompletion(taskId));
  };

  const filteredTasks = tasks
    .filter((task) =>
      task.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((task) => {
      if (filter === "complete") return task.completed;
      if (filter === "incomplete") return !task.completed;
      return true;
    });

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg font-poppins shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Task List
      </h2>
      <div className="relative w-full max-w-xs mx-auto mb-4">
        <input
          type="text"
          placeholder="Search tasks..."
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
      <div className="relative w-full max-w-xs mx-auto mb-4">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="all">All</option>
          <option value="complete">Complete</option>
          <option value="incomplete">Incomplete</option>
        </select>
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
              d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
            />
          </svg>
        </div>
      </div>
      {filteredTasks.length === 0 ? (
        <p className="text-center text-gray-500">No tasks available</p>
      ) : (
        <ul className="space-y-4">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`flex flex-col p-4 rounded-md shadow-sm ${
                task.completed ? "bg-green-100" : "bg-gray-100"
              }`}
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
                    <button
                      onClick={() => handleToggleTaskCompletion(task.id)}
                      className={`py-1 px-3 rounded-md focus:outline-none focus:ring-2 ${
                        task.completed
                          ? "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500"
                          : "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500"
                      }`}
                    >
                      {task.completed ? "Mark Incomplete" : "Mark Complete"}
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
