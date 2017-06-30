import { Component, OnInit } from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  private _products:Product[]
  constructor(private productService:ProductService) { }

  ngOnInit() {
  this._products = this.productService.allProducts();

  }



}
