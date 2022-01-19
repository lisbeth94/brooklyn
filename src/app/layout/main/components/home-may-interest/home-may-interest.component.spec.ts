import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMayInterestComponent } from './home-may-interest.component';

describe('HomeMayInterestComponent', () => {
  let component: HomeMayInterestComponent;
  let fixture: ComponentFixture<HomeMayInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMayInterestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMayInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
