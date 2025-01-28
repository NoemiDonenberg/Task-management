import React, { useState } from "react";
import Task from "../models/Task";
import AddTask from "./AddTask";
import EditTask from "./EditTask";

function TaskList() {
  const [tasks, setTasks] = useState([
    new Task(1, "ללמוד React", "2025-01-27"),
    new Task(2, "לסיים פרויקט", "2025-01-28"),
  ]);
  const [editingTask, setEditingTask] = useState(null);

  // פונקציה להוספת משימה
  const addTask = (description) => {
    const newTask = new Task(
      tasks.length + 1,
      description,
      new Date().toISOString().split("T")[0]
    );
    setTasks([...tasks, newTask]);
  };

  // פונקציה למחיקת משימה
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  // פונקציה לעדכון תיאור המשימה
  const saveTask = (id, newDescription) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, description: newDescription } : task
    );
    setTasks(updatedTasks);
    setEditingTask(null);
  };

  // פונקציה לסימון משימה כהושלמה או לביטול סימון
  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>רשימת משימות</h1>
      <AddTask onAddTask={addTask} />
      {editingTask && (
        <EditTask
          task={editingTask}
          onSave={saveTask}
          onCancel={() => setEditingTask(null)}
        />
      )}
      <ul>
        {tasks.map((task) => (
          <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <strong>{task.description}</strong> - {task.date}
            <button onClick={() => deleteTask(task.id)}>מחיקה</button>
            <button onClick={() => setEditingTask(task)}>עריכה</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
