import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJSLearningComponent } from './rx-js-learning.component';

describe('RxJSLearningComponent', () => {
  let component: RxJSLearningComponent;
  let fixture: ComponentFixture<RxJSLearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxJSLearningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJSLearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
