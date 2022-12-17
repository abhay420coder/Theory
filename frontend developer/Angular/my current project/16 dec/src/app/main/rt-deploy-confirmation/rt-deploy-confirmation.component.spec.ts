import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtDeployConfirmationComponent } from './rt-deploy-confirmation.component';

describe('RtDeployConfirmationComponent', () => {
  let component: RtDeployConfirmationComponent;
  let fixture: ComponentFixture<RtDeployConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtDeployConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtDeployConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
