import React, { useState } from "react";

const TaskForm = ({ onSubmit }) => {
  const today = new Date().toISOString().split("T")[0];

  const [task, setTask] = useState({
    id: Date.now(),
    title: "",
    priority: "media",
    deadline: "",
    completed: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.title.trim()) return alert("La tarea necesita un título.");
    if (!task.deadline) return alert("La tarea debe tener una fecha límite.");
    onSubmit(task);
    setTask({ ...task, id: Date.now(), title: "", deadline: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        name="title"
        placeholder="Nueva tarea"
        value={task.title}
        onChange={handleChange}
      />
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option value="alta">Alta</option>
        <option value="media">Media</option>
        <option value="baja">Baja</option>
      </select>
      <input
        type="date"
        name="deadline"
        value={task.deadline}
        min={today}
        onChange={handleChange}
      />
      <button type="submit">Agregar</button>
    </form>
  );
};

export default TaskForm;
