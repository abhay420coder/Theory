import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiAttacherComponent } from './multi-attacher.component';

describe('MultiAttacherComponent', () => {
  let component: MultiAttacherComponent;
  let fixture: ComponentFixture<MultiAttacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiAttacherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiAttacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
