import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtTemplateComponent } from './rt-template.component';

describe('RtTemplateComponent', () => {
  let component: RtTemplateComponent;
  let fixture: ComponentFixture<RtTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
