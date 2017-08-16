import {ErrorHandler, Injectable, Injector} from "@angular/core";
import {ExceptionLocation} from "./errors";
import {AuthGuard} from "../service/auth-guard.service";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) {
  }

  handleError(error) {
    if (error.occurAt) {
      switch (error.occurAt) {
        case ExceptionLocation.Network:
          alert("网络异常")
          break;
        case ExceptionLocation.ServerSide:
          alert("服务端异常:" + error.message)
          break;
        case ExceptionLocation.ClientSide:
          alert("客户端异常")
          break;
        case ExceptionLocation.Unauthorized:
          alert("授权已过期，请重新登录")
          // goto login
          this.injector.get(AuthGuard).gotoLogin(null)
          break;
        default:
          alert("未知异常");
      }
    } else {
      alert("发生未知错误" + error)
    }


  }
}
