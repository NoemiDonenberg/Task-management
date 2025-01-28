import React, { useState } from "react";
import Task from "../models/Task";
import AddTask from "./AddTask";

function TaskList() {
  const [tasks, setTasks] = useState([
    new Task(1, "ללמוד React", "2025-01-27"),
    new Task(2, "לסיים פרויקט", "2025-01-28"),
  ]);

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

  return (
    <div>
      <h1>רשימת משימות</h1>
      <AddTask onAddTask={addTask} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.description}</strong> - {task.date}
            <button onClick={() => deleteTask(task.id)}>מחיקה</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
