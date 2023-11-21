import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartEComponent } from './cart-e.component';

describe('CartEComponent', () => {
  let component: CartEComponent;
  let fixture: ComponentFixture<CartEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartEComponent]
    });
    fixture = TestBed.createComponent(CartEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
