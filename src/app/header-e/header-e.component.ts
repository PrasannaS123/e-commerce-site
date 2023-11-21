import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header-e',
  templateUrl: './header-e.component.html',
  styleUrls: ['./header-e.component.css']
})
export class HeaderEComponent {
  public totalcartToAdded: number = 0;
  public searchItem: any = "";


  constructor(private cartService: CartService) {
    this.cartService.getProducts().subscribe((result) => {
      this.totalcartToAdded = result.length;
    })
  }


  search(event: any) {
    this.searchItem = (event.target as HTMLInputElement).value;

    this.cartService.search.next(this.searchItem)
  }

}
