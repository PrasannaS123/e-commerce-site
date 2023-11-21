import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-products-details-e',
  templateUrl: './products-details-e.component.html',
  styleUrls: ['./products-details-e.component.css']
})
export class ProductsDetailsEComponent implements OnInit {

  productDetail: any = [];
  constructor(private productsService: ProductsService, private route: ActivatedRoute, private cartService: CartService) {

  }
  ngOnInit(): void {
    let productid = this.route.snapshot.paramMap.get('productid');
    console.log(productid);
    productid && this.productsService.getProductById(productid).subscribe((dummy) => {
      this.productDetail = dummy;
      console.log(dummy);
    })
  }

  addtocart(name: any) {
    this.cartService.addToCart(name);
  }

}
