import {Component, OnInit} from "@angular/core";
import {Product} from "../../model/product.model";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Product[]

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.allProducts().subscribe(products => this.products = products)

  }


}
