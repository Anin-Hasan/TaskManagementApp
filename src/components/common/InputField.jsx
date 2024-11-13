import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../../features/savedEmployees/savedEmployeesSlice";

const InputField = ({
  label,
  name,
  placeholder,
  type = "text",
  disabled = false,
}) => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.employees.employee[name]);

  const handleInputChange = (e) => {
    dispatch(handleChange({ name: e.target.name, value: e.target.value }));
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 font-poppins">
        {label}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        required
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        disabled={disabled}
      />
    </div>
  );
};

export default InputField;
