import {Injectable} from "@angular/core";
import {Product} from "../model/product.model";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {environment} from "../../environments/environment";

@Injectable()
export class ProductService {

  private _resourceUrl = environment.server + "/product"

  constructor(private http: Http) {
  }

  public allProducts(): Observable<Product[]> {
    /*    return Promise.resolve( [
          new Product(1, "product01", 100.09, "https://img13.360buyimg.com/n4/s260x260_jfs/t6322/348/206812202/167680/9e7a5201/593b58aeN73e99fbb.jpg", "this is product01"),
          new Product(2, "product02", 100.09, "https://img12.360buyimg.com/n4/s260x260_jfs/t5044/85/746483541/105545/3016ef6/58e743e6N3e9bec6b.jpg", "this is product01"),
          new Product(3, "product03", 100.09, "https://img13.360buyimg.com/n4/s260x260_jfs/t5689/138/3057656522/301458/9b64a50c/59365f0dNbaf61088.jpg", "this is product01"),
          new Product(4, "product04", 100.09, "https://img12.360buyimg.com/mobilecms/s220x220_jfs/t6121/115/199397477/216483/4bbce005/592693eeN05daddac.jpg", "this is product01"),
          new Product(5, "product05", 100.09, "https://img11.360buyimg.com/mobilecms/s220x220_jfs/t6709/161/1394232749/57891/b08f241d/59509447N55999946.jpg", "this is product01"),
          new Product(6, "product06", 100.09, "https://img13.360buyimg.com/n4/s260x260_jfs/t6322/348/206812202/167680/9e7a5201/593b58aeN73e99fbb.jpg", "this is product01"),
          new Product(7, "product07", 100.09, "https://img12.360buyimg.com/n4/s260x260_jfs/t5044/85/746483541/105545/3016ef6/58e743e6N3e9bec6b.jpg", "this is product01"),
          new Product(8, "product08", 100.09, "https://img13.360buyimg.com/n4/s260x260_jfs/t5689/138/3057656522/301458/9b64a50c/59365f0dNbaf61088.jpg", "this is product01"),
          new Product(9, "product09", 100.09, "https://img12.360buyimg.com/mobilecms/s220x220_jfs/t6121/115/199397477/216483/4bbce005/592693eeN05daddac.jpg", "this is product01"),
          new Product(10, "product10", 100.09, "https://img11.360buyimg.com/mobilecms/s220x220_jfs/t6709/161/1394232749/57891/b08f241d/59509447N55999946.jpg", "this is product01"),

          new Product(11, "product11", 100.09, "https://img11.360buyimg.com/mobilecms/s220x220_jfs/t6709/161/1394232749/57891/b08f241d/59509447N55999946.jpg", "this is product11"),
        ]);*/

// return this.http.get("http://localhost:8000/product").toPromise().then(response=>response.json() as Product[])
    return this.http.get(this._resourceUrl).map(response => response.json() || {})

  }

  public getById(productId: string): Observable<Product> {
    return this.http.get(`${this._resourceUrl}/${productId}`).map(response => response.json() || {})
  }

}

