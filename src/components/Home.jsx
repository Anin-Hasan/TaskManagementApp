import React from "react";
import EmployeeList from "./EmployeeList";

const Home = ({ employees, onEdit, onDelete }) => {
  return (
    <>
      <div className="container mx-auto p-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the TODO APP</h1>
        <p className="text-lg text-center">
          Manage your employees and tasks efficiently.
        </p>
      </div>
      <EmployeeList employees={employees} onEdit={onEdit} onDelete={onDelete} />
    </>
  );
};

export default Home;
