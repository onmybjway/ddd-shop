import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {MemberSummary} from "../model/member-summary.model";

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

  clear(){
    this.token = null
  }

  get authenticated(): boolean {
    return this.token != null;
  }

  get currentMember():MemberSummary{
    if(!this.authenticated){
      return null
    }

    //todo: change the mock user
    return new MemberSummary(10000,"Tom")

  }


}
