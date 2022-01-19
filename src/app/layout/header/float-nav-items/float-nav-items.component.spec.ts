import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatNavItemsComponent } from './float-nav-items.component';

describe('FloatNavItemsComponent', () => {
  let component: FloatNavItemsComponent;
  let fixture: ComponentFixture<FloatNavItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatNavItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatNavItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
