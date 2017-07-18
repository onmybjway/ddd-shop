import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {MemberSummary} from "../model/member-summary.model";
import {JwtHelper} from "angular2-jwt";
import {environment} from "../../environments/environment";

@Injectable()
export class AuthService {

  //
  private _formUrl: string
  get formUrl(): string {
    return this._formUrl;
  }

  set formUrl(value: string) {
    this._formUrl = value;
  }

  private _jwtHelper: JwtHelper = new JwtHelper();
  //
  private _token: string
  private _currentMember: MemberSummary



  constructor(private http: Http) {
  }

  auth(userName: String, password: String): Observable<boolean> {
    let options = new RequestOptions({headers: new Headers({'Content-Type': 'application/json'})});
    return this.http.post("http://localhost:8080/auth/auth", {credential: {name: userName, password: password}},
      options
    ).map(response => {
        let r = response.json()
        if (r.valid) {
          let user = this._jwtHelper.decodeToken(r.token);
          this._currentMember = new MemberSummary(user.memberId, user.name)
          this._token = r.token;

          if (!environment.production) {
            console.log("token:" + this._token)
            console.log(user)
            console.log(this._jwtHelper.isTokenExpired(this._token))
          }
        }
        return r.valid
      }
    )
  }

  clear() {
    this._token = null
    this._currentMember =null
  }

  isAuthenticated(): boolean {
    return this._token != null && !this.isTokenExpired()
  }

  currentMember(): MemberSummary {
    if (!this.isAuthenticated()) {
      return null
    }
    return this._currentMember
  }

  private isTokenExpired() {
    return this._jwtHelper.isTokenExpired(this._token);
  }


}
