class Task {
    constructor(id, description, date, completed = false) {
      this.id = id;
      this.description = description;
      this.date = date;
      this.completed = completed; // משימה הושלמה או לא
    }
  }
  
  export default Task;
  