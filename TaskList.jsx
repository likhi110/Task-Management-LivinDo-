import { useEffect, useState } from "react";
import API from "../api";

export default function TasksList({ onEdit }) {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const res = await API.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  const toggleComplete = async (task) => {
    await API.put(`/tasks/${task._id}`, {
      ...task,
      completed: !task.completed,
    });
    fetchTasks();
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id} style={{ margin: "10px 0" }}>
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              marginRight: "10px",
            }}
          >
            {task.title} - {task.description}
          </span>
          <button onClick={() => toggleComplete(task)}>
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button
            onClick={() => onEdit(task)}
            style={{ marginLeft: "5px" }}
          >
            Edit
          </button>
          <button
            onClick={() => deleteTask(task._id)}
            style={{ marginLeft: "5px" }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
