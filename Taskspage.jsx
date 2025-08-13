import { useState } from "react";
import TasksList from "../components/TasksList";
import AddTask from "../components/AddTask";

export default function TasksPage() {
  const [editingTask, setEditingTask] = useState(null);
  const [reload, setReload] = useState(false);

  const triggerReload = () => setReload((prev) => !prev);

  return (
    <div>
      <h1>Task Manager</h1>
      <AddTask
        editingTask={editingTask}
        onSaved={() => {
          triggerReload();
          setEditingTask(null);
        }}
      />
      <TasksList
        key={reload}
        onEdit={(task) => setEditingTask(task)}
      />
    </div>
  );
}
