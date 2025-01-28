class Task {
    constructor(id, description, date) {
      this.id = id;
      this.description = description;
      this.date = date;
    }
  
    formatDate() {
      return new Date(this.date).toLocaleDateString("he-IL");
    }
  }
  
  export default Task;