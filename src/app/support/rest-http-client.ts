import {Headers, Http, RequestOptions, RequestOptionsArgs, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {TokenHolder} from "./token-holder";
import 'rxjs/add/observable/throw';
import {Exception, HttpException, ServerSideException, UnauthorizedException, UnknownException} from "./errors";

@Injectable()
export class RestHttpClient {

  constructor(private _http: Http) {
  }

  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return this._http.get(url, this.processRequestOptions(options)).catch(response => {
      let exception: Exception;
      switch (response.status) {
        case 0:
          exception = new HttpException(response);
          break;
        case 401:
          exception = new UnauthorizedException();
          break;
        case 500:
          exception = new ServerSideException(response);
          break;
        default:
          exception = new UnknownException(response);
      }
      return Observable.throw(exception)
    })
  }

  post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
    return this._http.post(url, body, this.processRequestOptions(options)).catch(response => {
      return Observable.throw(new HttpException(response))
    })
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
