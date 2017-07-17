import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {

  //
  private _formUrl:string
  get formUrl(): string {
    return this._formUrl;
  }
  set formUrl(value: string) {
    this._formUrl = value;
  }

  //
  private token: string

  constructor(private http: Http) {
  }

  auth(userName: String, password: String): Observable<boolean> {
    let options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});
    return this.http.post("http://localhost:8080/auth/auth", {credential: {name: userName, password: password}},
      options
    ).map(response => {
        let r = response.json()
        if (r.valid) {
          this.token = r.token;
        }
        return r.valid
      }
    )
  }


  get authenticated(): boolean {
    return this.token != null;
  }

}
