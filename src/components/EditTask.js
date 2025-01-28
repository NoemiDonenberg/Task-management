import React, { useState, useEffect } from "react";

function EditTask({ task, onSave, onCancel }) {
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (task) {
      setDescription(task.description); // הגדרת תיאור המשימה הנוכחית
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim() === "") return;
    
    onSave(task.id, description); // שמירת השינויים
    setDescription(""); // איפוס השדה
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="ערוך משימה"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">שמור</button>
      <button type="button" onClick={onCancel}>ביטול</button>
    </form>
  );
}

export default EditTask;
