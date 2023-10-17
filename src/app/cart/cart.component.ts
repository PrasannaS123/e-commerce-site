import { Component,  } from '@angular/core';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {


  public TableShow: any = [];
  public getTotalPrice: number = 0;
  
  constructor(private cartService: CartService) {
    this.cartService.getProducts().subscribe((dummy: any) => {
      this.TableShow = dummy;
      this.getTotalPrice = this.cartService.getTotalPrice();
    })
    
  }
  removeItem(items: any) {
    this.cartService.removeCart(items , 0);
  }

  removeItemsAll() {
    this.cartService.removeAllItem();
  }
  







}





