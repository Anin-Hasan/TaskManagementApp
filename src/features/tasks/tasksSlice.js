import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  editingTaskId: null,
  newTaskDescription: "",
  newEmployeeId: "",
  selectedEmployee: "",
  taskDescription: "",
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Date.now().toString(),
        employeeId: action.payload.employeeId,
        description: action.payload.task,
        completed: false,
      });
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    setEditingTask: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        state.editingTaskId = task.id;
        state.newTaskDescription = task.description;
        state.newEmployeeId = task.employeeId;
      }
    },
    updateTaskDetails: (state, action) => {
      const { name, value } = action.payload;
      if (name === "newTaskDescription") {
        state.newTaskDescription = value;
      } else if (name === "newEmployeeId") {
        state.newEmployeeId = value;
      }
    },
    saveTask: (state) => {
      const task = state.tasks.find((task) => task.id === state.editingTaskId);
      if (task) {
        task.description = state.newTaskDescription;
        task.employeeId = state.newEmployeeId;
      }
      state.editingTaskId = null;
      state.newTaskDescription = "";
      state.newEmployeeId = "";
    },
    cancelEdit: (state) => {
      state.editingTaskId = null;
      state.newTaskDescription = "";
      state.newEmployeeId = "";
    },
    setSelectedEmployee: (state, action) => {
      state.selectedEmployee = action.payload;
    },
    setTaskDescription: (state, action) => {
      state.taskDescription = action.payload;
    },
    assignTask: (state) => {
      if (state.selectedEmployee && state.taskDescription) {
        state.tasks.push({
          id: Date.now().toString(),
          employeeId: state.selectedEmployee,
          description: state.taskDescription,
          completed: false,
        });
        state.selectedEmployee = "";
        state.taskDescription = "";
      }
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const {
  addTask,
  deleteTask,
  setEditingTask,
  updateTaskDetails,
  saveTask,
  cancelEdit,
  setSelectedEmployee,
  setTaskDescription,
  assignTask,
  toggleTaskCompletion,
} = tasksSlice.actions;
export default tasksSlice.reducer;
