import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-e',
  templateUrl: './products-e.component.html',
  styleUrls: ['./products-e.component.css']
})
export class ProductsEComponent implements OnInit {

  productsList: any[] = [];

  searchKey: string = '';

  public filterCategory: any = "";

  constructor(private productService: ProductsService, private cartService: CartService, private router: Router, private route: ActivatedRoute) {
    this.loadData();
  }
  loadData() {
    this.productService.getAllProducts().subscribe((res: any) => {
      this.productsList = res;
      this.filterCategory = res;


      //for assigning ectra value product
      this.productsList.forEach((dummy: any) => {
        if (dummy.category == "men's clothing" || dummy.category == "women's clothing") {
          dummy.category = "fashion";
        }


        Object.assign(dummy, { TotalPrice: dummy.price })
      });
      // console.log(this.productsList);
    },)

  }
  addtocart(name: any) {
    this.cartService.addToCart(name);
  }


  OnNavigate() {
    this.router.navigate(['/productDetails']);

  }
  ngOnInit() {
    this.cartService.search.subscribe((val) => {
      this.searchKey = val;
    })
  }

  filter(category: any) {
    this.filterCategory = this.productsList
      .filter((dummy: any) => {
        if (dummy.category === category || category == "") {
          return dummy;
        }

      })

  }

}
