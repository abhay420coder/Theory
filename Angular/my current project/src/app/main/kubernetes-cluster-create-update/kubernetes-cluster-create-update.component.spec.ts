import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KubernetesClusterCreateUpdateComponent } from './kubernetes-cluster-create-update.component';

describe('KubernetesClusterCreateUpdateComponent', () => {
  let component: KubernetesClusterCreateUpdateComponent;
  let fixture: ComponentFixture<KubernetesClusterCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KubernetesClusterCreateUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KubernetesClusterCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
