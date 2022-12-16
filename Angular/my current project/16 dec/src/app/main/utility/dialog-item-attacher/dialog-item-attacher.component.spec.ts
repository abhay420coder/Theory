import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogItemAttacherComponent } from './dialog-item-attacher.component';

describe('DialogItemAttacherComponent', () => {
  let component: DialogItemAttacherComponent;
  let fixture: ComponentFixture<DialogItemAttacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogItemAttacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogItemAttacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
