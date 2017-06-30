import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId: number;

  constructor(private productSerivce: ProductService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.productId = this.route.snapshot.params.id
  }

  goBack(): void {
    this.location.back()
  }
}
