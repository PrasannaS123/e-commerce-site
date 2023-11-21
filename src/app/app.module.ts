import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './header-e/dropdown.directive';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './services/filter.pipe';
import { HeaderEComponent } from './header-e/header-e.component';
import { CartEComponent } from './cart-e/cart-e.component';
import { LoginEComponent } from './login-e/login-e.component';
import { ProductsEComponent } from './products-e/products-e.component';
import { ProductsDetailsEComponent } from './products-details-e/products-details-e.component';
import { RegisterEComponent } from './register-e/register-e.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    SearchPipe,
    HeaderEComponent,
    CartEComponent,
    LoginEComponent,
    ProductsEComponent,
    ProductsDetailsEComponent,
    RegisterEComponent,
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
