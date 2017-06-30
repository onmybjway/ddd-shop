import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../model/product";

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

  private _products:Product[]

  constructor() { }

  ngOnInit() {
  }

}
