import {Component, Input, OnInit} from "@angular/core";
import {Product} from "../../model/product";
import {CartService} from "../../service/cart.service";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input("data")
  set products(value: Product[]) {
    this._products = value;
  }

  private _products: Product[]

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }

  addToCart(product: Product): void {
    this.cartService.addLine(product, 1)
  }
}
