import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModifyLabelsComponent } from './add-modify-labels.component';

describe('AddModifyLabelsComponent', () => {
  let component: AddModifyLabelsComponent;
  let fixture: ComponentFixture<AddModifyLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModifyLabelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModifyLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
