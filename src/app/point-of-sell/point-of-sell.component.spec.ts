import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointOfSellComponent } from './point-of-sell.component';

describe('PointOfSellComponent', () => {
  let component: PointOfSellComponent;
  let fixture: ComponentFixture<PointOfSellComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PointOfSellComponent]
    });
    fixture = TestBed.createComponent(PointOfSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
