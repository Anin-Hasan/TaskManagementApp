import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeProfile from "./components/employee/EmployeeProfile";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Message from "./components/common/Message";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [editingEmployee, setEditingEmployee] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [messageContent, setMessageContent] = useState("");

  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(savedEmployees);
  }, []);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  const handleSaveEmployee = (employee) => {
    if (editingEmployee) {
      setEmployees(
        employees.map((emp) => (emp.id === employee.id ? employee : emp))
      );
      setEditingEmployee(null);
      setMessageContent("Updated!");
    } else {
      setEmployees([...employees, employee]);
      setMessageContent("Saved!");
    }
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const handleEditEmployee = (employee) => {
    setEditingEmployee(employee);
  };

  const handleDeleteEmployee = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
    setMessageContent("Deleted!");
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  return (
    <Router>
      <Navbar />
      <Message visible={showMessage} message={messageContent} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home
                employees={employees}
                onEdit={handleEditEmployee}
                onDelete={handleDeleteEmployee}
              />
            </>
          }
        />
        <Route
          path="/employees"
          element={
            <>
              <EmployeeProfile
                onSave={handleSaveEmployee}
                employees={employees}
                editingEmployee={editingEmployee}
              />
            </>
          }
        />
      </Routes>
    </Router>
  );
}
