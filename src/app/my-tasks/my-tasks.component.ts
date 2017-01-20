import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-my-tasks',
  templateUrl: './my-tasks.component.html',
  styleUrls: ['./my-tasks.component.css'],
  providers: [TaskService]
})
export class MyTasksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
