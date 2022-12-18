import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsAttacherComponent } from './items-attacher.component';

describe('ItemsAttacherComponent', () => {
  let component: ItemsAttacherComponent;
  let fixture: ComponentFixture<ItemsAttacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsAttacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsAttacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
