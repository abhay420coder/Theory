import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseTrainComponent } from './release-train.component';

describe('ReleaseTrainComponent', () => {
  let component: ReleaseTrainComponent;
  let fixture: ComponentFixture<ReleaseTrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseTrainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
