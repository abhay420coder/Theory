import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbGlobalStatusComponent } from './db-global-status.component';

describe('DbGlobalStatusComponent', () => {
  let component: DbGlobalStatusComponent;
  let fixture: ComponentFixture<DbGlobalStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DbGlobalStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbGlobalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
