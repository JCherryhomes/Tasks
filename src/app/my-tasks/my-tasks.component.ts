import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ITask } from '../interfaces/ITask';
import { MdButton } from '@angular/material';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css'],
  providers: [TaskService, MdButton]
})
export class MyTasksComponent implements OnInit {
  tasks: ITask[] = [
    <ITask>{ complete: false, description: 'This is the first task' },
    <ITask>{ complete: true, description: 'This is the second task' },
    <ITask>{ complete: false, description: 'This is the third task' }
  ];

  constructor() { }

  ngOnInit() {
  }

  setComplete(task: ITask): void {
    task.complete = !task.complete;
  }

  addTask(): void {
    // Testing
  }
}
