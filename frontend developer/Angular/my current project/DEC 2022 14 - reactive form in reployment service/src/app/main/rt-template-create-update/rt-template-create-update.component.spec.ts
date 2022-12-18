import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RtTemplateCreateUpdateComponent } from './rt-template-create-update.component';

describe('RtTemplateCreateUpdateComponent', () => {
  let component: RtTemplateCreateUpdateComponent;
  let fixture: ComponentFixture<RtTemplateCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RtTemplateCreateUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RtTemplateCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
