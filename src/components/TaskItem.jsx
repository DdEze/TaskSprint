import React, { useState } from "react";

const TaskItem = ({ task, onUpdate, onDelete, isOverdue }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const toggleComplete = () => {
    onUpdate({ ...task, completed: !task.completed });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSave = () => {
    if (!editedTask.title.trim()) {
      alert("El título no puede estar vacío.");
      return;
    }
    onUpdate(editedTask);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedTask(task);
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? "done" : ""} ${isOverdue ? "overdue" : ""}`}>
      <input type="checkbox" checked={task.completed} onChange={toggleComplete} />
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
          />
          <select name="priority" value={editedTask.priority} onChange={handleChange}>
            <option value="alta">Alta</option>
            <option value="media">Media</option>
            <option value="baja">Baja</option>
          </select>
          <input
            type="date"
            name="deadline"
            value={editedTask.deadline}
            min={new Date().toISOString().split("T")[0]}
            onChange={handleChange}
          />
          <button onClick={handleSave}>💾</button>
          <button onClick={handleCancel}>❌</button>
        </>
      ) : (
        <>
          <span>{task.title}</span>
          <span className={`priority ${task.priority}`}>{task.priority}</span>
          <span className="deadline">{task.deadline}</span>
          <button onClick={() => setIsEditing(true)}>✏️</button>
          <button onClick={() => onDelete(task.id)}>❌</button>
        </>
      )}
    </div>
  );
};

export default TaskItem;
