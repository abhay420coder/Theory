import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddK8sDeploymnetComponent } from './add-k8s-deploymnet.component';

describe('AddK8sDeploymnetComponent', () => {
  let component: AddK8sDeploymnetComponent;
  let fixture: ComponentFixture<AddK8sDeploymnetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddK8sDeploymnetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddK8sDeploymnetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
