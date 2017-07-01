import {Component, OnInit} from "@angular/core";
import {CartService} from "../../service/cart.service";
import {Cart} from "../../model/cart";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  get cart(): Cart {
    return this.cartService.cart;
  }

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
  }


}
