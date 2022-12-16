import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtDeploymentsRedeploymentReviewComponent } from './rt-deployments-redeployment-review.component';

describe('RtDeploymentsRedeploymentReviewComponent', () => {
  let component: RtDeploymentsRedeploymentReviewComponent;
  let fixture: ComponentFixture<RtDeploymentsRedeploymentReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtDeploymentsRedeploymentReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtDeploymentsRedeploymentReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
