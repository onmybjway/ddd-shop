import {Component, Input, OnInit} from "@angular/core";
import {Product} from "../../model/product.model";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input("data")
  products: Product[]

  ngOnInit() {
  }
}
