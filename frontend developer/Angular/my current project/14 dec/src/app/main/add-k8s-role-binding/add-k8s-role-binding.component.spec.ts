import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddK8sRoleBindingComponent } from './add-k8s-role-binding.component';

describe('AddK8sRoleBindingComponent', () => {
  let component: AddK8sRoleBindingComponent;
  let fixture: ComponentFixture<AddK8sRoleBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddK8sRoleBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddK8sRoleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
