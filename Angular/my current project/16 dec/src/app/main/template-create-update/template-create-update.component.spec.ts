import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCreateUpdateComponent } from './template-create-update.component';

describe('TemplateCreateUpdateComponent', () => {
  let component: TemplateCreateUpdateComponent;
  let fixture: ComponentFixture<TemplateCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateCreateUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
