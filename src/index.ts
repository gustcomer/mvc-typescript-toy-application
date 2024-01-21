import TasksController from './TasksController'
import TasksView from './TasksView';

const tc: TasksController = new TasksController([]);
const tv: TasksView = new TasksView(tc);

tv.display()

tc.addTask("This is task 1")
tc.addTask("This is task 2")
tc.addTask("This is task 3")
tc.completeTask(2)

tv.update()
tc.addTask("This is task 4")
tv.update()
