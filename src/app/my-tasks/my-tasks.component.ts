import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../task.service';
import { Task, TaskState } from '../interfaces/Task';
import { MdButton } from '@angular/material';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css'],
  providers: [TaskService, MdButton]
})
export class MyTasksComponent implements OnInit {
  @Input('task') task: Task = <Task>{};

  constructor() {
  }

  ngOnInit() {
  }

  changeState(task: Task, state: TaskState): void {
    task.state = state;
  }

  getState(task: Task): string {
    return TaskState[task.state];
  }
}
