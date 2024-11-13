import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [],
  employee: { id: "", name: "", designation: "", email: "", phone: "" },
  editingEmployee: null,
  showMessage: false,
  messageContent: "",
  error: "",
};

const savedEmployeesSlice = createSlice({
  name: "savedEmployees",
  initialState,
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
      state.messageContent = "Saved!";
      state.showMessage = true;
    },
    deleteEmployee: (state, action) => {
      state.employees = state.employees.filter(
        (emp) => emp.id !== action.payload
      );
      state.messageContent = "Deleted!";
      state.showMessage = true;
    },
    setEditingEmployee: (state, action) => {
      state.editingEmployee = action.payload;
      state.employee = action.payload || {
        id: "",
        name: "",
        designation: "",
        email: "",
        phone: "",
      };
    },
    hideMessage: (state) => {
      state.showMessage = false;
    },
    handleChange: (state, action) => {
      const { name, value } = action.payload;
      state.employee[name] = value;
    },
    handleSubmit: (state) => {
      const { employees, editingEmployee, employee } = state;
      if (
        !editingEmployee &&
        employees.some(
          (emp) => emp.id === employee.id && emp !== editingEmployee
        )
      ) {
        state.error = "Employee ID is already taken.";
        return;
      }
      if (!/^\d+$/.test(employee.phone)) {
        state.error = "Phone number must be a string of digits.";
        return;
      }
      if (editingEmployee) {
        state.employees = employees.map((emp) =>
          emp.id === employee.id ? employee : emp
        );
        state.messageContent = "Updated!";
      } else {
        state.employees.push(employee);
        state.messageContent = "Saved!";
      }
      state.employee = {
        id: "",
        name: "",
        designation: "",
        email: "",
        phone: "",
      };
      state.editingEmployee = null;
      state.error = "";
      state.showMessage = true;
    },
  },
});
export const {
  setEmployees,
  addEmployee,
  deleteEmployee,
  setEditingEmployee,
  hideMessage,
  handleChange,
  handleSubmit,
} = savedEmployeesSlice.actions;
export default savedEmployeesSlice.reducer;
