export default class TaskModel{
  done: boolean
  constructor(readonly id: number, readonly description: string, done: boolean) {
    this.done = done
  }
}