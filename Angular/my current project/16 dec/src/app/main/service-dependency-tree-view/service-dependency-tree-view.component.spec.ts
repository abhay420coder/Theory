import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceDependencyTreeViewComponent } from './service-dependency-tree-view.component';

describe('ServiceDependencyTreeViewComponent', () => {
  let component: ServiceDependencyTreeViewComponent;
  let fixture: ComponentFixture<ServiceDependencyTreeViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceDependencyTreeViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceDependencyTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
