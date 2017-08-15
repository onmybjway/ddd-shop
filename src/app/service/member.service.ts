import {Injectable} from "@angular/core";
import {RestHttpClient} from "../support/rest-http-client";
import {Observable} from "rxjs/Observable";
import {MemberSummary} from "../model/member-summary.model";

@Injectable()
export class MemberService {

  constructor(private _http: RestHttpClient) {
  }

  summary(): Observable<MemberSummary> {
    return this._http.get("http://localhost:8001/member/summary").map(response => response.json() || {})
  }

}
