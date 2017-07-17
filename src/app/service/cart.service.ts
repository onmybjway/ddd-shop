import {Injectable} from "@angular/core";
import {Cart, CartLine} from "../model/cart.model";
import {Product} from "../model/product.model";

@Injectable()
export class CartService {
  get cart(): Cart {
    return this._cart;
  }

  private _cart: Cart = new Cart();

  constructor() {

  }

  addLine(product: Product, qty: number): void {

    let theLine = this._cart.lines.find(line => line.product.id == product.id);
    if (theLine) {
      theLine.quantity += qty;
    } else {
      this._cart.lines.push(new CartLine(product, qty))
    }


  }

}
