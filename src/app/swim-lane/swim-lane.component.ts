import {Component, OnInit} from '@angular/core';
import {MdGridList} from '@angular/material';
import {MyTasksComponent} from '../my-tasks/my-tasks.component';
import {SwimLane, Task, TaskState} from '../interfaces/Task';

@Component({
  selector: 'app-swim-lane',
  templateUrl: './swim-lane.component.html',
  styleUrls: ['./swim-lane.component.css'],
  providers: [MyTasksComponent, MdGridList]
})
export class SwimLaneComponent implements OnInit {
  swimlanes: SwimLane[] = [
    {
      title: 'To Do',
      tasks: [ <Task>{
          state: TaskState.backlog,
          description: 'This is the first task'
        }, <Task>{
          state: TaskState.complete,
          description: 'This is the second task'
        }, <Task>{
          state: TaskState.inProgress,
          description: 'This is the third task'
        }
      ]
    }, {
      title: 'In Progress',
      tasks: [<Task>{
          state: TaskState.backlog,
          description: 'This is the fourth task'
        }, <Task>{
          state: TaskState.complete,
          description: 'This is the fifth task'
        }, <Task>{
          state: TaskState.inProgress,
          description: 'This is the sixth task'
        }]
    }, {
      title: 'Complete',
      tasks: [<Task>{
          state: TaskState.backlog,
          description: 'This is the seventh task'
        }, <Task>{
          state: TaskState.complete,
          description: 'This is the eighth task'
        }, <Task>{
          state: TaskState.inProgress,
          description: 'This is the ninth task'
        }]
    }
  ];

  constructor() {}

  ngOnInit() {}

  addTask(): void {
    // Testing
  }
}
