import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtDeploymentsAddServiceComponent } from './rt-deployments-add-service.component';

describe('RtDeploymentsAddServiceComponent', () => {
  let component: RtDeploymentsAddServiceComponent;
  let fixture: ComponentFixture<RtDeploymentsAddServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtDeploymentsAddServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtDeploymentsAddServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
