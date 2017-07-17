import {Component, OnInit} from "@angular/core";
import {CartService} from "../../service/cart.service";
import {Cart, CartLine} from "../../model/cart.model";

declare var $:any;

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

  isEmpty():boolean{
    return this.cart.lines.length==0
  }

  remove(line:CartLine){
    if(!confirm("确认删除")) return;
    let index = this.cart.lines.findIndex(l=>l.product.id==line.product.id);
    this.cart.lines.splice(index)
  }

}
