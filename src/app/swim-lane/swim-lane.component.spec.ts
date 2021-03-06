/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SwimLaneComponent } from './swim-lane.component';

describe('SwimLaneComponent', () => {
  let component: SwimLaneComponent;
  let fixture: ComponentFixture<SwimLaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwimLaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwimLaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
