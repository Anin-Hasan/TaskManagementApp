import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Employee Profile</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Employee ID
          </label>
          <input
            name="id"
            value={employee.id}
            onChange={handleChange}
            placeholder="Employee ID"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            disabled={!!editingEmployee}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Employee Name
          </label>
          <input
            name="name"
            value={employee.name}
            onChange={handleChange}
            placeholder="Employee Name"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Designation
          </label>
          <input
            name="designation"
            value={employee.designation}
            onChange={handleChange}
            placeholder="Designation"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={employee.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={employee.phone}
            onChange={handleChange}
            placeholder="Phone"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          {editingEmployee ? "Update" : "Save"}
        </button>
      </form>
    </div>
  );
};

export default EmployeeProfile;
