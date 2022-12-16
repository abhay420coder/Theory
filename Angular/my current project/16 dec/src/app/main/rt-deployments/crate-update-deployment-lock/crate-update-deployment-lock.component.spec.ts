import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateUpdateDeploymentLockComponent } from './crate-update-deployment-lock.component';

describe('CrateUpdateDeploymentLockComponent', () => {
  let component: CrateUpdateDeploymentLockComponent;
  let fixture: ComponentFixture<CrateUpdateDeploymentLockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrateUpdateDeploymentLockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrateUpdateDeploymentLockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
