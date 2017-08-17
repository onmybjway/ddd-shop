import {BrowserModule} from "@angular/platform-browser";
import {ErrorHandler, NgModule} from "@angular/core";
import {Http, HttpModule, RequestOptions, XHRBackend} from "@angular/http";
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
import {MemberService} from "./service/member.service";
import {GlobalErrorHandler} from "./support/error-handler";
import {LoadingComponent} from './common/loading/loading.component';
import {AuthHttp} from "./support/auth-http";


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
    LoginComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    ProductService, CartService, MemberService,
    AuthService, AuthGuard,
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    {provide: Http, useClass: AuthHttp}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
