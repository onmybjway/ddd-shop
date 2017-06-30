import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {CheckoutComponent} from "./shop/checkout/checkout.component";
import {CartComponent} from "./shop/cart/cart.component";
import {HomeComponent} from "./shop/home/home.component";
import {MeComponent} from "./shop/me/me.component";
import {DiscoverComponent} from "./shop/discover/discover.component";
import {ProductDetailComponent} from "./shop/product/product-detail.component";

const routes: Routes = [
  {
    // path: '**', redirectTo: "home"
    path: '',redirectTo: "home",pathMatch:'full'
  },
  {path: 'home', component: HomeComponent},
  {path: 'discover', component: DiscoverComponent},
  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart', component: CartComponent},
  {path: 'me', component: MeComponent},

  {path: 'product/:id', component: ProductDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
