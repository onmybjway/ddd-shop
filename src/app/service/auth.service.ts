import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {UserPrincipal} from "../model/user-principal.model";
import {JwtHelper} from "angular2-jwt";
import {environment} from "../../environments/environment";
// import {RestHttpClient} from "../support/rest-http-client";
import {TokenHolder} from "../support/token-holder";
import {Http, Headers} from '@angular/http';

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

  private _currentUser: UserPrincipal


  constructor(private http: Http) {
    this._currentUser = this.parsePrincipalFrom(TokenHolder.token)
  }
/*

  auth(userName: String, password: String): Observable<boolean> {
    return this.http.post("http://localhost:8080/auth/auth", {credential: {name: userName, password: password}})
      .map(response => {
          let r = response.json()
          if (r.valid) {
            this._currentUser = this.parsePrincipalFrom(r.token)
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
*/

  /*

   */
  authenticate(userName: String, password: String): Observable<boolean> {
    let headers = new Headers()
    headers.append("Authorization", "Basic YXBwOnNlY3JldA==")
    headers.append("Content-Type", "application/x-www-form-urlencoded")

    return this.http.post(
      `http://localhost:8001/oauth/token?grant_type=password&scope=read&username=${userName}&password=${password}`, "",
      {headers: headers})
      .map(response => {
        let r = response.json()
        console.log("token:", r.access_token)
        this._currentUser = this.parsePrincipalFrom(r.access_token)
        this.setToken(r.access_token)
        return true
      })

  }

  clear() {

    this.setToken("")
    this._currentUser = null
  }

  isAuthenticated(): boolean {
    return this.getToken() != null && !this.isTokenExpired()
  }

  currentMember(): UserPrincipal {
    if (!this.isAuthenticated()) {
      return null
    }
    return this._currentUser
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

  private parsePrincipalFrom(token: string): UserPrincipal {
    if (token == null || token.trim().length == 0) return null
    let user = this._jwtHelper.decodeToken(token);
    return new UserPrincipal(user.id, user.user_name)
  }

}
