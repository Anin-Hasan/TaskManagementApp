import { configureStore } from "@reduxjs/toolkit";
import employeesReducer from "../../features/savedEmployees/savedEmployeesSlice";
import tasksReducer from "../../features/tasks/tasksSlice";

const store = configureStore({
  reducer: { employees: employeesReducer, tasks: tasksReducer },
});

export default store;
