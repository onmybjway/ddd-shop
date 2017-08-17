import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {Location} from "@angular/common";
import {CartService} from "../../service/cart.service";
import {Product} from "../../model/product.model";

declare var $: any;
declare var Materialize: any;

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(private productSerivce: ProductService,
              private cartService: CartService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    let productId = this.route.snapshot.params.id
    this.productSerivce.getById(productId).subscribe(product => this.product = product);

    //
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  }

  goBack(): void {
    this.location.back()
  }

  addToCart(product: Product): void {
    this.cartService.addLine(product, 1)
    Materialize.toast('已加入购物车', 1500)
  }
}
