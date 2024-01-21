import TaskModel from "./TaskModel";
import TasksController from "./TasksController";

export default class TasksView {
  tasks: TaskModel[]

  constructor(readonly tc: TasksController){
    this.tasks = tc.tasks
  }

  update(){
    this.display()
  }

  display(){
    if(this.tasks.length==0) {
      console.log('No tasks to show');
    }
    for (const task of this.tasks) {
      console.log(`${task.id}: ${task.description} - ${task.done ? 'Done' : 'Not Done'}`);
    }
  }
}