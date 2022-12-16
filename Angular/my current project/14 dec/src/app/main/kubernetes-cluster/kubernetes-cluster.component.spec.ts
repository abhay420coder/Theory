import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KubernetesClusterComponent } from './kubernetes-cluster.component';

describe('KubernetesClusterComponent', () => {
  let component: KubernetesClusterComponent;
  let fixture: ComponentFixture<KubernetesClusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KubernetesClusterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KubernetesClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
