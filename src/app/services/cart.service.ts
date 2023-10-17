import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItem: any = [];
  public productLists = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<any>("");

  constructor() { }

  getProducts(){
    return this.productLists.asObservable();
  }

  setProducts(products: any) {
    this.cartItem.push(products);
    this.productLists.next(products);
  }

  addToCart(product: any) {
    this.cartItem.push(product);
    this.productLists.next(this.cartItem);
    this.getTotalPrice();
  }
  
 
  getTotalPrice(): number {
    let Alltotal = 0;
    this.cartItem.map((dummy: any) => {
      Alltotal += dummy.price;
    });
    return Alltotal;
  }

  removeCart(product: any , index: number) { 
    this.cartItem.map((dummy: any) => { 
      if (product.id === dummy.id) {
        this.cartItem.splice(index, 1);
      }
    })
    this.productLists.next(this.cartItem);
  }
  removeAllItem() {
    this.cartItem = [];
    this.productLists.next(this.cartItem);
  }
 

  
}
