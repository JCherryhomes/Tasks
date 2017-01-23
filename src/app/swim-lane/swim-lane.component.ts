import {Component, OnInit} from '@angular/core';
import {MdGridList} from '@angular/material';
import { DragulaService } from 'ng2-dragula';
import {MyTasksComponent} from '../my-tasks/my-tasks.component';
import {SwimLane, Task, TaskState} from '../interfaces/Task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-swim-lane',
  templateUrl: './swim-lane.component.html',
  styleUrls: ['./swim-lane.component.css'],
  providers: [MyTasksComponent, MdGridList, DragulaService, TaskService]
})
export class SwimLaneComponent implements OnInit {
  swimlanes: SwimLane[];

  constructor(private dragula: DragulaService, private service: TaskService) {
    dragula.dropModel.subscribe((value) => {
      console.log(value);
      this.onDropModel(value.slice(1));
    });

    dragula.removeModel.subscribe((value) => {
      this.onRemoveModel(value.slice(1));
    });
  }

  ngOnInit() {
    this.service.getSwimlanes().subscribe(lanes => this.swimlanes = lanes);
  }

  private onDropModel(args): void {
    let [el, target, source] = args;
    console.log('target', target);
    console.log('source', source);
  }

  private onRemoveModel(args) {
    let [el, source] = args;
    console.log('remove source', source);
  }

  addTask(): void {
    // Testing
  }
}
