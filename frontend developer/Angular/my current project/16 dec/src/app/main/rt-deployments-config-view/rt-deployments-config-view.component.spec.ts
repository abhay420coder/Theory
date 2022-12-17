import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtDeploymentsConfigViewComponent } from './rt-deployments-config-view.component';

describe('RtDeploymentsConfigViewComponent', () => {
  let component: RtDeploymentsConfigViewComponent;
  let fixture: ComponentFixture<RtDeploymentsConfigViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtDeploymentsConfigViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtDeploymentsConfigViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
