import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseTrainCreateUpdateComponent } from './release-train-create-update.component';

describe('ReleaseTrainCreateUpdateComponent', () => {
  let component: ReleaseTrainCreateUpdateComponent;
  let fixture: ComponentFixture<ReleaseTrainCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReleaseTrainCreateUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReleaseTrainCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
