import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateTaintsComponent } from './add-update-taints.component';

describe('AddUpdateTaintsComponent', () => {
  let component: AddUpdateTaintsComponent;
  let fixture: ComponentFixture<AddUpdateTaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUpdateTaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpdateTaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
