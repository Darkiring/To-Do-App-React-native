import {makeObservable, observable, action} from 'mobx';

class TaskStore {
  tasks = [];

  constructor(participant) {
    // Call it here
    makeObservable(this, {
      tasks: observable,
      setTasks: action,
    });
    this.tasks = tasks;
  }

  setTasks = tasks => {
    this.tasks = tasks;
  };
}

const tasks = new TaskStore();

export default tasks;
