import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsEComponent } from './products-e.component';

describe('ProductsEComponent', () => {
  let component: ProductsEComponent;
  let fixture: ComponentFixture<ProductsEComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsEComponent]
    });
    fixture = TestBed.createComponent(ProductsEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
