import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  

  constructor(private http: HttpClient) { }

  public productData: any;
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>("https://fakestoreapi.com/products");
  }

  getProductById(id: string) {
    return this.http.get<any[]>("https://fakestoreapi.com/products/" + id);
  }

  
 
  
}

