export class TokenHolder {
  static get token(): string {
    let token = localStorage.getItem("token");
    if (token)  return token.trim().length == 0 ? null : token;
    return null
  }

  static set token(value: string) {
    localStorage.setItem("token",value)
    // this._token = value;
  }


  private static _token: string
}
