import TasksController from '../src/TasksController';

import {describe, expect, test} from '@jest/globals';

describe('Tasks Controller',() => {

  const tc: TasksController = new TasksController([]);

  beforeAll(() => {
    tc.addTask("This is task 1")
    tc.addTask("This is task 2")
    tc.addTask("This is task 3")
    tc.completeTask(2)
  })

  test('Should add Tasks to Controller', () => {
    const t1 = tc.tasks.find(task => task.id === 1)
    const t2 = tc.tasks.find(task => task.id === 2)
    const t3 = tc.tasks.find(task => task.id === 3)

    expect(tc.tasks).toHaveLength(3)
    expect(t1?.description).toBe("This is task 1")
    expect(t2?.done).toBeTruthy()
    expect(t3?.description).toBe("This is task 3")
    expect(t3?.done).toBeFalsy()
  })
})