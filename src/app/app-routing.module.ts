import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: '', component: LoginComponent},
  {path: "**", component: LoginComponent},
  { path: 'products', component: ProductsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'productDetails/:productid', component: ProductsDetailsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent}





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
