import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamespaceCreateUpdateComponent } from './namespace-create-update.component';

describe('NamespaceCreateUpdateComponent', () => {
  let component: NamespaceCreateUpdateComponent;
  let fixture: ComponentFixture<NamespaceCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamespaceCreateUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamespaceCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
