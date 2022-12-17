import { ComponentFixture, TestBed } from '@angular/core/testing';

import { K8sTemplatesComponent } from './k8s-templates.component';

describe('K8sTemplatesComponent', () => {
  let component: K8sTemplatesComponent;
  let fixture: ComponentFixture<K8sTemplatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ K8sTemplatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(K8sTemplatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
