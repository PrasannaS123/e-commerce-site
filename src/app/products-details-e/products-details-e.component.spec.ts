import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDetailsEComponent } from './products-details-e.component';

describe('ProductsDetailsEComponent', () => {
  let component: ProductsDetailsEComponent;
  let fixture: ComponentFixture<ProductsDetailsEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsDetailsEComponent]
    });
    fixture = TestBed.createComponent(ProductsDetailsEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
