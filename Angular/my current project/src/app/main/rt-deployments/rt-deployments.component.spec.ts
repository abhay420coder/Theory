import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtDeploymentsComponent } from './rt-deployments.component';

describe('RtDeploymentsComponent', () => {
  let component: RtDeploymentsComponent;
  let fixture: ComponentFixture<RtDeploymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtDeploymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtDeploymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
