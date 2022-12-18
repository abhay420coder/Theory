import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtDeploymentSrHistoryViewComponent } from './rt-deployment-sr-history-view.component';

describe('RtDeploymentSrHistoryViewComponent', () => {
  let component: RtDeploymentSrHistoryViewComponent;
  let fixture: ComponentFixture<RtDeploymentSrHistoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtDeploymentSrHistoryViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtDeploymentSrHistoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
