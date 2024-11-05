import React from "react";
import EmployeeList from "../employee/EmployeeList";

const Home = ({ employees, onEdit, onDelete }) => {
  return (
    <div className="container mx-auto p-4 font-poppins">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the TODO APP</h1>
        <p className="text-lg mb-4">
          Manage your employees and tasks efficiently.
        </p>
      </div>
      <div className="mt-8">
        <EmployeeList
          employees={employees}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      </div>
    </div>
  );
};

export default Home;
