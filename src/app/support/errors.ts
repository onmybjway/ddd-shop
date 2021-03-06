export enum ExceptionLocation {
  Unknown, Network, ServerSide, ClientSide, Unauthorized, AccessDinied
}

export class Exception extends Error {

  readonly occurAt: ExceptionLocation;

  constructor(message: string, occurAt: ExceptionLocation, public data?: any) {
    super(message);
    this.occurAt = occurAt;

    // add it because:
    //https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(this, Exception.prototype)
  }
}

export class UnknownException extends Exception {
  constructor(data?: any) {
    super("unknown exception", ExceptionLocation.Unknown, data)
  }
}

export class HttpException extends Exception {
  constructor(response: Response) {
    super(response.toString(), ExceptionLocation.Network, response)
  }
}

export class UnauthorizedException extends Exception {
  constructor() {
    super("unauthorized", ExceptionLocation.Unauthorized)
  }
}

export class AccessDeniedException extends Exception {
  constructor() {
    super("AccessDenied", ExceptionLocation.AccessDinied)
  }
}

export class ServerSideException extends Exception {
  constructor(response: Response) {
    super(ServerSideException.parseMessage(response), ExceptionLocation.ServerSide)
  }

  private static parseMessage(response: Response): string {
    //todo:
    return response.toString()
  }
}

