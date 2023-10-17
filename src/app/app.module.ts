import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CartComponent } from './cart/cart.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { DropdownDirective } from './header/dropdown.directive';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './services/filter.pipe';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';




@NgModule({
  declarations: [
    AppComponent,

    CartComponent,
     ProductsComponent,
     HeaderComponent,
     ProductsDetailsComponent,
    DropdownDirective,
    SearchPipe,

    RegisterComponent,
     LoginComponent,


 
   



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
