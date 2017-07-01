import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './shop/checkout/checkout.component';
import { CartComponent } from './shop/cart/cart.component';
import { HomeComponent } from './shop/home/home.component';
import { MeComponent } from './shop/me/me.component';
import { DiscoverComponent } from './shop/discover/discover.component';
import {ProductService} from "./service/product.service";
import { ProductDetailComponent } from './shop/product/product-detail.component';
import { ProductListComponent } from './shop/product/product-list.component';
import {CartService} from "./service/cart.service";

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    CartComponent,
    HomeComponent,
    MeComponent,
    DiscoverComponent,
    ProductDetailComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
