import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddK8sServiceComponent } from './add-k8s-service.component';

describe('AddK8sServiceComponent', () => {
  let component: AddK8sServiceComponent;
  let fixture: ComponentFixture<AddK8sServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddK8sServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddK8sServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
