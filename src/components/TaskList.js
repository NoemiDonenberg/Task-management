import React from "react";
import Task from "../models/Task";
// import Task from "../models/Task"; // ייבוא המודל

function TaskList() {
  // יצירת משימות באמצעות המודל
  const tasks = [
    new Task(1, "ללמוד React", "2025-01-27"),
    new Task(2, "לסיים פרויקט", "2025-01-28"),
  ];

  return (
    <div>
      <h1>רשימת משימות</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.description}</strong> - {task.formatDate()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
