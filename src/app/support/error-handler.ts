import {ErrorHandler, Injectable} from "@angular/core";
import {ExceptionLocation} from "./errors";

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  handleError(error) {
    if (error.occurAt) {
      switch (error.occurAt) {
        case ExceptionLocation.Network:
          alert("网络异常")
          break;
        case ExceptionLocation.ServerSide:
          alert("服务端异常")
          break;
        case ExceptionLocation.ClientSide:
          alert("客户端异常")
          break;
        default:
          alert("未知异常");
      }
    } else {
      alert("发生未知错误" + error)
    }


  }
}
