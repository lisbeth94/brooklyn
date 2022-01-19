import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSoldComponent } from './home-sold.component';

describe('HomeSoldComponent', () => {
  let component: HomeSoldComponent;
  let fixture: ComponentFixture<HomeSoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSoldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
