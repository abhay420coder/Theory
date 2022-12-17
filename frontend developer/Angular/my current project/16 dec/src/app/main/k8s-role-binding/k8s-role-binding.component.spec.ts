import { ComponentFixture, TestBed } from '@angular/core/testing';

import { K8sRoleBindingComponent } from './k8s-role-binding.component';

describe('K8sRoleBindingComponent', () => {
  let component: K8sRoleBindingComponent;
  let fixture: ComponentFixture<K8sRoleBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ K8sRoleBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(K8sRoleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
