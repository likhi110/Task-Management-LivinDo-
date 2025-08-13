import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import TaskList from "./components/TaskList"; // ✅ match file name
import AddTask from "./components/AddTask";

function TasksPage() {
  const [editingTask, setEditingTask] = useState(null);
  const [reload, setReload] = useState(false);

  const triggerReload = () => setReload((prev) => !prev);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Task Manager</h1>
      <AddTask
        editingTask={editingTask}
        onSaved={() => {
          triggerReload();
          setEditingTask(null);
        }}
      />
      <TaskList
        key={reload} // ✅ force refresh list after add/edit/delete
        onEdit={(task) => setEditingTask(task)}
      />
    </div>
  );
}

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/tasks" element={<TasksPage />} />
      </Routes>
  );
}
