import { useEffect, useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });
  const navigate = useNavigate();

  const fetchTasks = async () => {
    const { data } = await API.get("/tasks");
    setTasks(data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const createTask = async (e) => {
    e.preventDefault();
    await API.post("/tasks", form);
    setForm({ title: "", description: "" });
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  return (
    <div className="p-6">
      <button onClick={() => { localStorage.removeItem("token"); navigate("/login"); }}
        className="bg-red-500 text-white px-4 py-2 mb-4 rounded">Logout</button>

      <form onSubmit={createTask} className="mb-6 flex gap-2">
        <input type="text" placeholder="Title" value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="border p-2" />
        <input type="text" placeholder="Description" value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="border p-2" />
        <button className="bg-blue-500 text-white px-4">Add</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <li key={task._id} className="flex justify-between items-center mb-2 border p-2">
            <span>{task.title} - {task.description}</span>
            <button onClick={() => deleteTask(task._id)} className="bg-red-500 text-white px-2 rounded">X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
