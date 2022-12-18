import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtDeploymentLogComponent } from './rt-deployment-log.component';

describe('RtDeploymentLogComponent', () => {
  let component: RtDeploymentLogComponent;
  let fixture: ComponentFixture<RtDeploymentLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtDeploymentLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtDeploymentLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
