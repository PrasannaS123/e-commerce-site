import { Component, HostListener } from '@angular/core';
import { CartService } from '../services/cart.service';
import { style, transition, trigger,animate , state} from '@angular/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
 
})
export class HeaderComponent {

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
