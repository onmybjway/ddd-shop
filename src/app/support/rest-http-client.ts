import {Headers, Http, RequestOptions, RequestOptionsArgs, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {TokenHolder} from "./token-holder";
import {environment} from "../../environments/environment";


@Injectable()
export class RestHttpClient {

  constructor(private _http: Http) {
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this._http.get(url, this.processRequestOptions(options))
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this._http.post(url, body, this.processRequestOptions(options))
  }

  put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this._http.put(url, body, this.processRequestOptions(options))
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this._http.delete(url, this.processRequestOptions(options))
  }

  private processRequestOptions(options: RequestOptionsArgs) {
    if (options && !options.headers)
      options.headers = new Headers()
    else
      options = new RequestOptions({headers: new Headers()});

    options.headers.set('Content-Type', 'application/json')

    if (TokenHolder.token != null) {
      // if (!environment.production) console.log("send token" + TokenHolder.token)
      options.headers.set("Authorization", "Bearer " + TokenHolder.token)
    }
    return options;
  }


}
