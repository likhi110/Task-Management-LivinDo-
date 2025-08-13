import { useState, useEffect } from "react";
import API from "../api";

export default function AddTask({ editingTask, onSaved }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
    }
  }, [editingTask]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    if (editingTask) {
      await API.put(`/tasks/${editingTask._id}`, {
        title,
        description,
        completed: editingTask.completed,
      });
    } else {
      await API.post("/tasks", { title, description });
    }

    setTitle("");
    setDescription("");
    onSaved();
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: "5px" }}
      />
      <input
        placeholder="Task description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginRight: "5px" }}
      />
      <button type="submit">
        {editingTask ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
}
