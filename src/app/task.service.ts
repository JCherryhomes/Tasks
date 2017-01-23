import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { SwimLane } from './interfaces/Task';

@Injectable()
export class TaskService {

  constructor(private http: Http) { }

  getSwimlanes(): Observable<SwimLane[]> {
    return this.http.get('./data.json')
      .map(response => <SwimLane[]>response.json().swimlanes);
  }
}
