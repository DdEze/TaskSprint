import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import TaskItem from "./TaskItem";

function normalizeDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function parseDateLocal(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
}

const TaskList = ({ tasks, onUpdate, onDelete, onReorder }) => {
  const [filter, setFilter] = useState("todos");

  const today = normalizeDate(new Date());

  const filteredTasks = tasks.filter((task) => {
    if (!task.deadline) {
      if (filter === "vencidas") return false;
      if (filter === "pendientes") return !task.completed;
      if (filter === "completadas") return task.completed;
      return true;
    }

    const taskDeadline = parseDateLocal(task.deadline);
    const isOverdue = !task.completed && taskDeadline < today;

    if (filter === "completadas") return task.completed;
    if (filter === "pendientes") return !task.completed && !isOverdue;
    if (filter === "vencidas") return isOverdue;

    return true;
  });

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const sourceIndex = result.source.index;
    const destinationIndex = result.destination.index;

    if (sourceIndex === destinationIndex) return;

    const updatedTasks = Array.from(tasks);
    const [movedTask] = updatedTasks.splice(sourceIndex, 1);
    updatedTasks.splice(destinationIndex, 0, movedTask);

    onReorder(updatedTasks);
  };

  return (
    <div className="task-list">
      <div className="filters">
        <button
          className={filter === "todos" ? "active" : ""}
          onClick={() => setFilter("todos")}
        >
          Todas
        </button>
        <button
          className={filter === "completadas" ? "active" : ""}
          onClick={() => setFilter("completadas")}
        >
          Completadas
        </button>
        <button
          className={filter === "pendientes" ? "active" : ""}
          onClick={() => setFilter("pendientes")}
        >
          Pendientes
        </button>
        <button
          className={filter === "vencidas" ? "active" : ""}
          onClick={() => setFilter("vencidas")}
        >
          Vencidas
        </button>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="taskList">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="task-draggable-container"
            >
              {filteredTasks.length === 0 ? (
                <p>No hay tareas para mostrar.</p>
              ) : (
                filteredTasks.map((task, index) => {
                  const taskDeadline = task.deadline ? parseDateLocal(task.deadline) : null;
                  const isOverdue = taskDeadline && !task.completed && taskDeadline < today;

                  return (
                    <Draggable key={task.id} draggableId={task.id.toString()} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                           style={{
                            marginBottom: "8px",
                            ...provided.draggableProps.style,
                          }}
                        >
                          <TaskItem
                            task={task}
                            onUpdate={onUpdate}
                            onDelete={onDelete}
                            isOverdue={isOverdue}
                          />
                        </div>
                      )}
                    </Draggable>
                  );
                })
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TaskList;
