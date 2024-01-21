import TasksController from './TasksController'

const tc: TasksController = new TasksController([]);

tc.addTask("This is task 1")
tc.addTask("This is task 2")
tc.addTask("This is task 3")
tc.completeTask(2)


console.log(tc);