import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRunningQueriesComponent } from './current-running-queries.component';

describe('CurrentRunningQueriesComponent', () => {
  let component: CurrentRunningQueriesComponent;
  let fixture: ComponentFixture<CurrentRunningQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentRunningQueriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentRunningQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
