class HomeRenovation {
    constructor(budget) {
      this.budget = budget;
      this.tasks = [];
      this.completedTasks = [];
    }
  
    addTask(description, cost, priority) {
      if (cost > this.budget) {
        return `Not enough budget to add '${description}' task.`;
      }
  
      this.tasks.push({ description, cost, priority });
      this.budget -= cost;
      return `The task '${description}' has been successfully added to the renovation plan.`;
    }
  
    markTaskAsCompleted(description) {
      const taskIndex = this.tasks.findIndex(task => task.description === description);
  
      if (taskIndex === -1) {
        throw new Error(`Task '${description}' not found in the renovation plan.`);
      }
  
      const [completedTask] = this.tasks.splice(taskIndex, 1);
      this.completedTasks.push(completedTask);
      return `The task '${description}' has been successfully completed.`;
    }
  
    getPriorityTasksCount(minimalPriority) {
      if (minimalPriority <= 0) {
        return `The priority cannot be zero or negative.`;
      }
  
      const tasksCount = this.tasks.filter(task => task.priority >= minimalPriority).length;
      if (tasksCount === 0) {
        return `No tasks found with priority ${minimalPriority} or higher.`;
      }
  
      return `You have ${tasksCount} tasks to prioritize.`;
    }
  
    renovationSummary() {
      if (this.completedTasks.length === 0) {
        throw new Error(`No tasks have been completed yet!`);
      }
  
      let summary = `Budget left $${this.budget}.\n`;
      summary += `You have completed ${this.completedTasks.length} tasks.\n`;
      summary += `Pending tasks in the renovation plan:\n`;
      summary += this.tasks.map(task => `${task.description} - Cost: ${task.cost}, Priority: ${task.priority}`).join('\n');
  
      return summary;
    }
  }
  
  const renovation = new HomeRenovation(10000);
  console.log(renovation.addTask("Paint walls", 1500, 2));
  console.log(renovation.addTask("Install new windows", 5000, 1));
  console.log(renovation.addTask("New Roof", 5000, 1));  // Not enough budget
  console.log(renovation.markTaskAsCompleted("Paint walls"));
  console.log(renovation.markTaskAsCompleted("Change doors"));  // Error: Task not found
  console.log(renovation.getPriorityTasksCount(1));
  console.log(renovation.renovationSummary());