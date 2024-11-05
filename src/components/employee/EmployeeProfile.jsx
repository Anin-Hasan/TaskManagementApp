import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeForm from "./EmployeeForm";

const EmployeeProfile = ({ onSave, employees, editingEmployee }) => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    id: "",
    name: "",
    designation: "",
    email: "",
    phone: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (editingEmployee) {
      setEmployee(editingEmployee);
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      employees.some((emp) => emp.id === employee.id && emp !== editingEmployee)
    ) {
      setError("Employee ID is already taken.");
      return;
    }
    if (!/^\d+$/.test(employee.phone)) {
      setError("Phone number must be a string of digits.");
      return;
    }
    onSave(employee);
    setEmployee({ id: "", name: "", designation: "", email: "", phone: "" });
    setError("");
    navigate("/");
  };

  return (
    <EmployeeForm
      employee={employee}
      onChange={handleChange}
      onSubmit={handleSubmit}
      error={error}
      editingEmployee={editingEmployee}
    />
  );
};

export default EmployeeProfile;
