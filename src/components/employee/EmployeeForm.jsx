import React, { useEffect, useRef } from "react";
import InputField from "../common/InputField";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  handleSubmit,
  hideMessage,
} from "../../features/savedEmployees/savedEmployeesSlice";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const prevErrorRef = useRef();
  const { employee, error, editingEmployee } = useSelector(
    (state) => state.employees
  );
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(handleSubmit());
    setTimeout(() => dispatch(hideMessage()), 3000);
  };
  useEffect(() => {
    prevErrorRef.current = error;
  }, [error]);
  useEffect(() => {
    if (prevErrorRef.current && error === "") {
      navigate("/");
      setTimeout(() => dispatch(hideMessage()), 3000);
    }
  }, [dispatch, error, navigate]);
  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg font-poppins shadow-md">
      <h2 className="text-2xl font-bold mb-4">Employee Profile</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={onSubmit} className="space-y-4">
        <InputField
          label="Employee ID"
          name="id"
          value={employee.id}
          placeholder="Employee ID"
          disabled={!!editingEmployee}
        />
        <InputField
          label="Employee Name"
          name="name"
          value={employee.name}
          placeholder="Employee Name"
        />
        <InputField
          label="Designation"
          name="designation"
          value={employee.designation}
          placeholder="Designation"
        />
        <InputField
          label="Email"
          name="email"
          value={employee.email}
          placeholder="Email"
          type="email"
        />
        <InputField
          label="Phone"
          name="phone"
          value={employee.phone}
          placeholder="Phone"
          type="tel"
        />
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

export default EmployeeForm;
