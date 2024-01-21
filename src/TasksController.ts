import TaskModel from './TaskModel'

export default class TasksController{
  tasks: TaskModel[];

  constructor(tasks: TaskModel[]){
    this.tasks = tasks;
  }

  addTask(description: string) {
    const newTask = new TaskModel(this.tasks.length+1, description, false)
    this.tasks.push(newTask)
  }

  completeTask(id: number) {
    const task = this.tasks.find(task => task.id === id)
    if(task) {
      task.done = true
    }
  }
}