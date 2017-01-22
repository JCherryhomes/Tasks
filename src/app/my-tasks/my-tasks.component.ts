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

  setComplete(task: Task): void {
    if (task.state === TaskState.complete){
      task.state = TaskState.backlog;
    } else {
      task.state = TaskState.complete;
    }
  }
}
