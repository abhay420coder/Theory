import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceReleaseCreateUpdateComponent } from './service-release-create-update.component';

describe('ServiceReleaseCreateUpdateComponent', () => {
  let component: ServiceReleaseCreateUpdateComponent;
  let fixture: ComponentFixture<ServiceReleaseCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceReleaseCreateUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceReleaseCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
