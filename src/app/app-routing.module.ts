import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartEComponent } from './cart-e/cart-e.component';
import { LoginEComponent } from './login-e/login-e.component';
import { ProductsDetailsEComponent } from './products-details-e/products-details-e.component';
import { RegisterEComponent } from './register-e/register-e.component';
import { ProductsEComponent } from './products-e/products-e.component';




const routes: Routes = [
  { path: '', component: LoginEComponent },
  { path: 'products', component: ProductsEComponent },
  { path: 'cart', component: CartEComponent },
  { path: 'productDetails/:productid', component: ProductsDetailsEComponent },
  { path: 'register', component: RegisterEComponent },
  { path: 'login', component: LoginEComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
