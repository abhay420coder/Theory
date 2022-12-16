import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceReleaseComponent } from './service-release.component';

describe('ServiceReleaseComponent', () => {
  let component: ServiceReleaseComponent;
  let fixture: ComponentFixture<ServiceReleaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceReleaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
