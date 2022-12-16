import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtDeploymentsSrLockDetailComponent } from './rt-deployments-sr-lock-detail.component';

describe('RtDeploymentsSrLockDetailComponent', () => {
  let component: RtDeploymentsSrLockDetailComponent;
  let fixture: ComponentFixture<RtDeploymentsSrLockDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtDeploymentsSrLockDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RtDeploymentsSrLockDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
