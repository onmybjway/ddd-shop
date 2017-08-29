import {Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response, XHRBackend} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {
  AccessDeniedException,
  Exception,
  HttpException,
  ServerSideException,
  UnauthorizedException,
  UnknownException
} from "./errors";
import {TokenHolder} from "./token-holder";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthHttp extends Http {

  constructor(backend: XHRBackend, defaultOptions: RequestOptions) {
    super(backend, defaultOptions)
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    if (typeof url === "string") {
      options = this.processRequestOptions(options)
    } else {
      if (TokenHolder.token && !url.headers.has("Authorization")) {
        url.headers.set("Authorization", "Bearer " + TokenHolder.token)
      }
    }

    return super.request(url, options).catch(response => {
      let exception: Exception;
      switch (response.status) {
        case 0:
          exception = new HttpException(response);
          break;
        case 400:
          exception = new ServerSideException(response);
          break;
        case 401:
          exception = new UnauthorizedException();
          break;
        case 403:
          exception = new AccessDeniedException();
          break;
        case 404:
          exception = new HttpException(response);
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

  private processRequestOptions(options: RequestOptionsArgs): RequestOptionsArgs {
    if (options && !options.headers)
      options.headers = new Headers()
    else
      options = new RequestOptions({headers: new Headers()});

    if (TokenHolder.token != null) {
      // if (!environment.production) console.log("send token" + TokenHolder.token)
      options.headers.set("Authorization", "Bearer " + TokenHolder.token)

    }
    return options;
  }
}



