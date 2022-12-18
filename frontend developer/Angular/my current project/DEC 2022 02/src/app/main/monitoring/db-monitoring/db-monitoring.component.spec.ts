import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbMonitoringComponent } from './db-monitoring.component';

describe('DbMonitoringComponent', () => {
  let component: DbMonitoringComponent;
  let fixture: ComponentFixture<DbMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbMonitoringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DbMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
