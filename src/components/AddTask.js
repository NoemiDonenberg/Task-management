import React, { useState } from "react";

function AddTask({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() === "") return;

    // מעבירה את התיאור לקומפוננטת האב
    onAddTask(description);
    setDescription(""); // איפוס השדה
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="הכנסי משימה חדשה"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">הוספה</button>
    </form>
  );
}

export default AddTask;
