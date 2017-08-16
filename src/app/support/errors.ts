export enum ExceptionLocation {
  Unknown, Network, ServerSide, ClientSide,
}

export class Exception extends Error {

  readonly occurAt: ExceptionLocation = ExceptionLocation.Unknown

  constructor(message: string, occurAt: ExceptionLocation, public data?: any) {
    super(message)
    this.occurAt = occurAt

    // add it because:
    //https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(this, Exception.prototype)
  }
}

export class HttpException extends Exception {
  constructor(response: Response) {
    super(response.toString(), ExceptionLocation.Network, response)
  }
}


