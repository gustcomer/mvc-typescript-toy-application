import TaskModel from './TaskModel'

const task = new TaskModel(1, "This is task 1", false)

console.log(task.id);
console.log(task.description);
console.log(task.done);