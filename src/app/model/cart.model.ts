import {Product} from "./product.model";
export class Cart {
  public lines: CartLine[] = [];

}

export class CartLine {

  constructor(public product: Product, public quantity: number) {
  }
}
