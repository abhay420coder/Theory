import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamespaceLogsComponent } from './namespace-logs.component';

describe('NamespaceLogsComponent', () => {
  let component: NamespaceLogsComponent;
  let fixture: ComponentFixture<NamespaceLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamespaceLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamespaceLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
