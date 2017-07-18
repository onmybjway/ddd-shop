import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {MemberSummary} from "../model/member-summary.model";
import {JwtHelper} from "angular2-jwt";
import {environment} from "../../environments/environment";
import {RestHttpClient} from "../support/rest-http-client";
import {TokenHolder} from "../support/token-holder";

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

  private _currentMember: MemberSummary


  constructor(private http: RestHttpClient) {
    this._currentMember = this.parseMember(TokenHolder.token)
  }

  auth(userName: String, password: String): Observable<boolean> {
    return this.http.post("http://localhost:8080/auth/auth", {credential: {name: userName, password: password}})
      .map(response => {
          let r = response.json()
          if (r.valid) {
            this._currentMember = this.parseMember(r.token)
            this.setToken(r.token)

            if (!environment.production) {
              console.log("token:" + this.getToken())
              console.log(this._jwtHelper.isTokenExpired(this.getToken()))
            }
          }
          return r.valid
        }
      )
  }

  clear() {

    this.setToken("")
    this._currentMember = null
  }

  isAuthenticated(): boolean {
    return this.getToken() != null && !this.isTokenExpired()
  }

  currentMember(): MemberSummary {
    if (!this.isAuthenticated()) {
      return null
    }
    return this._currentMember
  }

  private isTokenExpired() {
    return this._jwtHelper.isTokenExpired(this.getToken());
  }

  private setToken(token: string) {
    TokenHolder.token = token
  }

  private getToken() {
    return TokenHolder.token
  }

  private parseMember(token: string): MemberSummary {
    if (token == null || token.trim().length == 0) return null
    let user = this._jwtHelper.decodeToken(token);
    return new MemberSummary(user.memberId, user.name)
  }

}
