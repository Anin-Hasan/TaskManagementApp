import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EmployeeProfile from "./components/employee/EmployeeProfile";
import EmployeeDetails from "./components/employee/EmployeeDetails";
import AssignTask from "./components/task/AssignTask";
import TaskList from "./components/task/TaskList";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Message from "./components/common/Message";
import { useSelector, useDispatch } from "react-redux";
import { setEmployees } from "./features/savedEmployees/savedEmployeesSlice";

export default function App() {
  const dispatch = useDispatch();
  const { employees, showMessage, messageContent } = useSelector(
    (state) => state.employees
  );
  useEffect(() => {
    const savedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    dispatch(setEmployees(savedEmployees));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  return (
    <Router>
      <Navbar />
      <Message visible={showMessage} message={messageContent} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route
          path="/employees"
          element={
            <>
              <EmployeeProfile />
            </>
          }
        />
        <Route path="/employee/:id" element={<EmployeeDetails />} />
        <Route path="/assign-task" element={<AssignTask />} />
        <Route path="/tasks" element={<TaskList />} />
      </Routes>
    </Router>
  );
}
