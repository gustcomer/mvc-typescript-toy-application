import TaskModel from '../src/TaskModel'

import {describe, expect, test} from '@jest/globals';

describe('TaskModel', () => {
  test('Should create a Task', () => {
    const task = new TaskModel(1, "This is task 1", false)
  
    expect(task).toBeDefined()
  })
})
