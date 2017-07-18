import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {CheckoutComponent} from "./shop/checkout/checkout.component";
import {CartComponent} from "./shop/cart/cart.component";
import {HomeComponent} from "./shop/home/home.component";
import {MeComponent} from "./shop/me/me.component";
import {DiscoverComponent} from "./shop/discover/discover.component";
import {ProductService} from "./service/product.service";
import {ProductDetailComponent} from "./shop/product/product-detail.component";
import {ProductListComponent} from "./shop/product/product-list.component";
import {CartService} from "./service/cart.service";
import {NavbarComponent} from "./common/navbar/navbar.component";
import {NavbarWithSidebarComponent} from "./common/navbar/navbar-with-sidebar.component";
import {LoginComponent} from "./common/authentication/login.component";
import {AuthService} from "./service/auth.service";
import {AuthGuard} from "./service/auth-guard.service";
import {RestHttpClient} from "./support/rest-http-client";


@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    CartComponent,
    HomeComponent,
    MeComponent,
    DiscoverComponent,
    ProductDetailComponent,
    ProductListComponent,
    NavbarComponent,
    NavbarWithSidebarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [ProductService, CartService, AuthService, AuthGuard, RestHttpClient],
  bootstrap: [AppComponent]
})
export class AppModule {

}
