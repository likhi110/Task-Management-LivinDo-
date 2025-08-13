// client/src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Your backend API
});

// Example functions
export const getTasks = () => API.get("/tasks");
export const createTask = (taskData) => API.post("/tasks", taskData);
export const updateTask = (id, updatedTask) =>
  API.put(`/tasks/${id}`, updatedTask);
export const deleteTask = (id) => API.delete(`/tasks/${id}`);

export default API;
