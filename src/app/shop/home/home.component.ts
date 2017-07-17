import {Component, OnInit} from "@angular/core";
import {Product} from "../../model/product.model";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  private _products: Product[]

  constructor(private productService: ProductService) {
  }

  ngOnInit() {

    // this.productService.allProducts().then(products => this._products = products);
    this.productService.allProducts().subscribe(
      products => this._products = products,
    err=>alert("加载失败")
    )

  }


}
